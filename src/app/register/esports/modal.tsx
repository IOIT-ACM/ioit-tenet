import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function CongratulationsModal() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

        const launchConfetti = () => {
            void myConfetti({
                particleCount: 100,
                spread: 70,
                startVelocity: 30,
                origin: { x: Math.random(), y: Math.random() * 0.6 },
                gravity: 0.5,
                scalar: 0.9,
                shapes: ['circle', 'square'],
                colors: ['#0070d1', '#1e90ff', '#87cefa', '#ffffff', '#f0f8ff'],
            });
        };

        const interval = setInterval(launchConfetti, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
            <canvas ref={canvasRef} className="fixed inset-0" />
            <div className="mx-4 w-full max-w-md rounded-xl bg-white border border-blue-200 p-8 text-center shadow-xl text-gray-800">
                <h2 className="mb-6 text-3xl font-bold text-blue-600">Congratulations!</h2>
                <p className="mb-8 text-lg text-gray-600">Welcome to TENET eSports 2025! See you on Oct 11th, 2025.</p>
                <Link
                    href=""
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400 px-6 py-3 text-white hover:from-blue-500 hover:to-green-500"
                >
                    <FaWhatsapp className="text-xl" /> Join WhatsApp Group
                </Link>
            </div>
        </div>
    );
}
