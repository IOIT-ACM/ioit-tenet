'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';

const Spinner = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const StatusMessage = ({
    message,
    type,
    onClose
}: {
    message: string;
    type: 'success' | 'error' | 'warning';
    onClose: () => void;
}) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 6000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const styles = {
        success: 'bg-green-100 border-green-500 text-green-700',
        error: 'bg-red-100 border-red-500 text-red-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700'
    };

    const icons = {
        success: (
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        ),
        error: (
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        ),
        warning: (
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        )
    };

    return (
        <div className={`fixed top-5 right-5 z-50 max-w-sm p-4 border-l-4 rounded-md shadow-lg ${styles[type]}`} role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg className="h-6 w-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        {icons[type]}
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="font-bold">{type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Warning'}</p>
                    <p className="text-sm">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 -mt-2 -mr-2 text-xl font-bold hover:opacity-70 transition-opacity"
                    aria-label="Close notification"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default function AttendancePage() {
    const [id, setId] = useState('');
    const [meal, setMeal] = useState<'Yes' | 'No'>('No');
    const [goodies, setGoodies] = useState<'Yes' | 'No'>('No');
    const [eventName, setEventName] = useState('Hackathon');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{
        message: string;
        type: 'success' | 'error' | 'warning';
    } | null>(null);
    const [scannerError, setScannerError] = useState<string | null>(null);
    const qrScannerRef = useRef<Html5Qrcode | null>(null);
    const scannerCleanupRef = useRef<boolean>(false);

    const resetForm = () => {
        setId('');
        setMeal('No');
        setGoodies('No');
    };

    const validateInputs = () => {
        if (!id.trim()) {
            setStatusMessage({ message: 'Please enter an Attendee ID', type: 'warning' });
            return false;
        }
        if (!eventName.trim()) {
            setStatusMessage({ message: 'Please enter an Event Name', type: 'warning' });
            return false;
        }
        return true;
    };

    const markAttendance = useCallback(async (scannedId?: string) => {
        if (isSubmitting) return;

        const attendeeId = scannedId ?? id;
        if (!attendeeId.trim() || !eventName.trim()) {
            setStatusMessage({
                message: 'Please provide both Attendee ID and Event Name',
                type: 'warning'
            });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const response = await fetch('/api/attendance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    id: attendeeId.trim(),
                    meal,
                    goodies,
                    eventName: eventName.trim(),
                }),
            });

            const result = await response.json() as { message?: string };

            if (response.ok) {
                setStatusMessage({
                    message: result.message ?? `Attendance marked successfully for ID: ${attendeeId}`,
                    type: 'success'
                });
                resetForm();
            } else {
                // Handle specific error cases
                if (response.status === 404) {
                    setStatusMessage({
                        message: result.message ?? 'ID not found or sheet does not exist',
                        type: 'error'
                    });
                } else if (response.status === 409) {
                    setStatusMessage({
                        message: result.message ?? 'Attendance already marked for this ID',
                        type: 'warning'
                    });
                } else {
                    setStatusMessage({
                        message: result.message ?? 'Failed to mark attendance',
                        type: 'error'
                    });
                }
            }
        } catch (err) {
            console.error('Attendance submission error:', err);
            setStatusMessage({
                message: 'Network error. Please check your connection and try again.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    }, [id, meal, goodies, eventName, isSubmitting]);

    const handleManualSubmit = async () => {
        if (validateInputs()) {
            await markAttendance();
        }
    };

    useEffect(() => {
        if (isScanning) {
            const initializeScanner = async () => {
                try {
                    await new Promise(resolve => setTimeout(resolve, 200));

                    const element = document.getElementById('qr-reader-container');
                    if (!element) {
                        throw new Error('QR reader container not found in DOM');
                    }

                    if (!qrScannerRef.current) {
                        qrScannerRef.current = new Html5Qrcode('qr-reader-container');
                    }

                    const scanner = qrScannerRef.current;

                    if (scanner.getState() === Html5QrcodeScannerState.SCANNING) {
                        return;
                    }

                    await scanner.start(
                        { facingMode: 'environment' },
                        {
                            fps: 10,
                            qrbox: { width: 250, height: 250 },
                            aspectRatio: 1.0
                        },
                        (decodedText) => {
                            setId(decodedText.trim());
                            void stopScanner();
                            void markAttendance(decodedText.trim());
                        },
                        (_errorMessage) => {
                            // Ignore parse errors - they're normal when no QR code is visible
                        }
                    );
                } catch (err: unknown) {
                    console.error('Scanner initialization error:', err);
                    const errorMessage = err instanceof Error ? err.message : 'Could not start camera';
                    setScannerError(errorMessage);
                    setStatusMessage({
                        message: 'Could not start camera. Please check permissions and try again.',
                        type: 'error'
                    });
                    setIsScanning(false);
                }
            };

            void initializeScanner();
        }
    }, [isScanning, markAttendance]);

    const startScanner = () => {
        setScannerError(null);
        setIsScanning(true);
    };

    const stopScanner = async () => {
        if (qrScannerRef.current && !scannerCleanupRef.current) {
            try {
                scannerCleanupRef.current = true;
                await qrScannerRef.current.stop();
                qrScannerRef.current.clear();
            } catch (err) {
                console.error('Scanner stop error:', err);
            } finally {
                scannerCleanupRef.current = false;
            }
        }
        setIsScanning(false);
        setScannerError(null);
    };

    useEffect(() => {
        return () => {
            if (qrScannerRef.current && !scannerCleanupRef.current) {
                qrScannerRef.current.stop().catch(err =>
                    console.error('Failed to stop scanner on unmount:', err)
                );
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
            {statusMessage && (
                <StatusMessage
                    message={statusMessage.message}
                    type={statusMessage.type}
                    onClose={() => setStatusMessage(null)}
                />
            )}

            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Event Attendance</h1>
                    <p className="text-gray-500">Scan a QR code or enter an ID manually</p>
                </div>

                {isScanning ? (
                    <div className="space-y-4">
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Point camera at QR code</h3>
                        </div>
                        <div
                            id="qr-reader-container"
                            className="rounded-lg overflow-hidden border-2 border-indigo-300 min-h-[300px] flex items-center justify-center bg-gray-100"
                        >
                            <div className="text-gray-500 text-sm">Initializing camera...</div>
                        </div>
                        {scannerError && (
                            <div className="text-center text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                                <strong>Scanner Error:</strong> {scannerError}
                            </div>
                        )}
                        <button
                            onClick={stopScanner}
                            disabled={isSubmitting}
                            className="w-full bg-gray-200 text-gray-800 p-3 rounded-lg font-semibold hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                        >
                            Cancel Scan
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <button
                            onClick={startScanner}
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9V9z" />
                            </svg>
                            Scan QR Code
                        </button>
                    </div>
                )}

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                </div>

                <div className="space-y-5">
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                            Attendee ID *
                        </label>
                        <input
                            id="id"
                            name="id"
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors text-white"
                            placeholder="e.g., QR-101"
                        />
                    </div>

                    <div>
                        <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">
                            Event Name *
                        </label>
                        <input
                            id="eventName"
                            name="eventName"
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors text-white"
                            placeholder="e.g., Hackathon"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="meal" className="block text-sm font-medium text-gray-700 mb-1">
                                Meal
                            </label>
                            <select
                                id="meal"
                                name="meal"
                                value={meal}
                                onChange={(e) => setMeal(e.target.value as 'Yes' | 'No')}
                                disabled={isSubmitting}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors text-white"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="goodies" className="block text-sm font-medium text-gray-700 mb-1">
                                Goodies
                            </label>
                            <select
                                id="goodies"
                                name="goodies"
                                value={goodies}
                                onChange={(e) => setGoodies(e.target.value as 'Yes' | 'No')}
                                disabled={isSubmitting}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors text-white"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleManualSubmit}
                        disabled={isSubmitting || !id.trim() || !eventName.trim()}
                        className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    >
                        {isSubmitting && <Spinner />}
                        {isSubmitting ? 'Submitting...' : 'Mark Attendance Manually'}
                    </button>
                </div>

                <div className="text-center text-xs text-gray-500">
                    <p>Fields marked with * are required</p>
                </div>
            </div>
        </div>
    );
}