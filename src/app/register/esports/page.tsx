'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { FaUsers, FaUserShield, FaCreditCard, FaCheck } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QRCodeSVG } from 'qrcode.react';
import CongratulationsModal from './modal';

// Reusable Zod schema for a single member or leader
const memberSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    ign: z.string().min(1, 'IGN is required'),
    ignId: z.string().min(1, 'IGN ID is required'),
    contact: z.string().regex(/^\d{10}$/, 'Enter a valid 10-digit contact number'),
    email: z.string().email('Enter a valid email'),
});

// Main form schema
const esportsSchema = z.object({
    teamName: z.string().min(1, 'Team name is required'),
    leader: memberSchema,
    members: z.array(memberSchema).length(3, 'All 3 members are required'),
    transactionId: z.string().min(1, 'Transaction ID is required'),
});

// TypeScript types inferred from Zod schemas
type FormInput = z.infer<typeof esportsSchema>;
type MemberInput = z.infer<typeof memberSchema>;

// Constants
const ESPORTS_FEE = 400;
const UPI_ID = 'adimail2404@oksbi';
const PAYEE_NAME = 'Aditya Godse';

// Form step configuration
const FORM_STEPS = [
    { id: 'team', title: 'Team Info', icon: FaUsers },
    { id: 'leader', title: 'Leader Details', icon: FaUserShield },
    { id: 'members', title: 'Team Members', icon: FaUsers },
    { id: 'payment', title: 'Payment', icon: FaCreditCard },
];

// Reusable field definitions for member/leader forms
const memberFields: { field: keyof MemberInput; label: string; type: React.HTMLInputTypeAttribute; fullWidth?: boolean }[] = [
    { field: 'name', label: 'Full Name', type: 'text' },
    { field: 'ign', label: 'In-Game Name (IGN)', type: 'text' },
    { field: 'ignId', label: 'IGN ID', type: 'text' },
    { field: 'contact', label: 'Contact Number', type: 'tel' },
    { field: 'email', label: 'Email Address', type: 'email', fullWidth: true },
];

export default function EsportsRegisterPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [showWhatsAppLink, setShowWhatsAppLink] = useState(false);

    const form = useForm<FormInput>({
        resolver: zodResolver(esportsSchema),
        defaultValues: {
            teamName: '',
            leader: { name: '', ign: '', ignId: '', contact: '', email: '' },
            members: Array(3).fill({ name: '', ign: '', ignId: '', contact: '', email: '' }),
            transactionId: '',
        },
        mode: 'onChange',
    });

    // Watch the teamName field to dynamically update the QR code
    const teamName = form.watch('teamName');

    const progress = ((currentStep + 1) / FORM_STEPS.length) * 100;
    const isFormValid = form.formState.isValid;

    const nextStep = async () => {
        let isValid = false;
        switch (currentStep) {
            case 0: isValid = await form.trigger('teamName'); break;
            case 1: isValid = await form.trigger('leader'); break;
            case 2: isValid = await form.trigger('members'); break;
            default: isValid = true;
        }

        if (isValid && currentStep < FORM_STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    async function onSubmit(values: FormInput) {
        setSubmitting(true);
        const toastId = toast.loading('Submitting your registration...');
        try {
            const timestamp = new Date().toLocaleString('en-GB', {
                day: '2-digit', month: 'long', year: 'numeric',
                hour: '2-digit', minute: '2-digit',
            });

            const apiData = {
                timestamp,
                teamName: values.teamName,
                leaderName: values.leader.name, leaderIGN: values.leader.ign, leaderIGNId: values.leader.ignId, leaderContact: values.leader.contact, leaderEmail: values.leader.email,
                member1Name: values.members?.[0]?.name ?? '', member1IGN: values.members?.[0]?.ign ?? '', member1IGNId: values.members?.[0]?.ignId ?? '', member1Contact: values.members?.[0]?.contact ?? '', member1Email: values.members?.[0]?.email ?? '',
                member2Name: values.members?.[1]?.name ?? '', member2IGN: values.members?.[1]?.ign ?? '', member2IGNId: values.members?.[1]?.ignId ?? '', member2Contact: values.members?.[1]?.contact ?? '', member2Email: values.members?.[1]?.email ?? '',
                member3Name: values.members?.[2]?.name ?? '', member3IGN: values.members?.[2]?.ign ?? '', member3IGNId: values.members?.[2]?.ignId ?? '', member3Contact: values.members?.[2]?.contact ?? '', member3Email: values.members?.[2]?.email ?? '',
                transactionId: values.transactionId,
            };

            const response = await fetch('/api/esports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(apiData),
            });

            if (response.ok) {
                toast.success('Registration recorded successfully!', { id: toastId });
                setShowWhatsAppLink(true);
            } else {
                const data = await response.json() as { message: string };
                toast.error(`Error: ${data.message}`, { id: toastId });
            }
        } catch (error) {
            toast.error('Network error, please try again', { id: toastId });
        } finally {
            setSubmitting(false);
        }
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <Card className="border-l-4 border-l-blue-500 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50"><CardTitle className="flex items-center gap-3 text-2xl"><div className="p-2 bg-blue-100 rounded-lg"><FaUsers className="text-blue-600 text-xl" /></div>Team Information</CardTitle></CardHeader>
                        <CardContent className="space-y-6 pt-6"><FormField control={form.control} name="teamName" render={({ field }) => (<FormItem><FormLabel className="text-base font-semibold">Team Name *</FormLabel><FormControl><Input placeholder="Enter your team name" {...field} className="bg-white border-gray-300 h-12 text-lg" /></FormControl><FormMessage /></FormItem>)} /></CardContent>
                    </Card>
                );
            case 1:
                return (
                    <Card className="border-l-4 border-l-green-500 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50"><CardTitle className="flex items-center gap-3 text-2xl"><div className="p-2 bg-green-100 rounded-lg"><FaUserShield className="text-green-600 text-xl" /></div>Team Leader Details</CardTitle></CardHeader>
                        <CardContent className="pt-6"><div className="grid md:grid-cols-2 gap-6">{memberFields.map((item) => (<FormField key={item.field} control={form.control} name={`leader.${item.field}`} render={({ field }) => (<FormItem className={item.fullWidth ? 'md:col-span-2' : ''}><FormLabel className="font-semibold">{item.label} *</FormLabel><FormControl><Input placeholder={`Enter ${item.label.toLowerCase()}`} {...field} type={item.type} className="bg-white border-gray-300 h-12" /></FormControl><FormMessage /></FormItem>)} />))}</div></CardContent>
                    </Card>
                );
            case 2:
                return (
                    <Card className="border-l-4 border-l-purple-500 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50"><CardTitle className="flex items-center gap-3 text-2xl"><div className="p-2 bg-purple-100 rounded-lg"><FaUsers className="text-purple-600 text-xl" /></div>Team Members</CardTitle></CardHeader>
                        <CardContent className="space-y-8 pt-6">{[0, 1, 2].map((index) => (<div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"><h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">{index + 1}</span>Member {index + 1}</h4><div className="grid md:grid-cols-2 gap-4">{memberFields.map((item) => (<FormField key={item.field} control={form.control} name={`members.${index}.${item.field}`} render={({ field }) => (<FormItem className={item.fullWidth ? 'md:col-span-2' : ''}><FormLabel className="text-sm font-medium">{item.label} *</FormLabel><FormControl><Input placeholder={`Enter member's ${item.label.toLowerCase()}`} {...field} type={item.type} className="bg-white border-gray-300 h-11" /></FormControl><FormMessage className="text-xs" /></FormItem>)} />))}</div></div>))}</CardContent>
                    </Card>
                );
            case 3:
                const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${ESPORTS_FEE}.00&cu=INR&tn=${encodeURIComponent(teamName || 'Esports')}`;

                return (
                    <Card className="border-l-4 border-l-orange-500 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <FaCreditCard className="text-orange-600 text-xl" />
                                </div>
                                Payment Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6">
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                                    <span className="text-lg font-bold text-orange-800">Registration Fee:</span>
                                    <span className="text-2xl font-bold text-orange-600">₹{ESPORTS_FEE}</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    {/* QR Code Container */}
                                    <div className="text-center w-full md:w-auto mb-4 md:mb-0">
                                        <div className="p-2 bg-white rounded-lg border-2 border-orange-300 inline-block max-w-full">
                                            <QRCodeSVG value={upiUrl} size={180} includeMargin={false} />
                                        </div>
                                    </div>
                                    {/* Instructions Container */}
                                    <div className="flex-1 w-full">
                                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                                            <h4 className="font-semibold text-orange-800 mb-2">Payment Instructions:</h4>
                                            <ul className="text-sm text-orange-700 space-y-2 list-disc list-inside">
                                                <li>Scan the QR code to make your payment</li>
                                                <li>Your team name is included in the payment note</li>
                                                <li>After payment, copy the Transaction ID below</li>
                                                <li>Keep a screenshot of the payment for verification</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FormField 
                                control={form.control} 
                                name="transactionId" 
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-semibold">Transaction ID *</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="Enter transaction ID from your payment" 
                                                {...field} 
                                                className="bg-white border-gray-300 h-12 text-lg" 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} 
                            />
                        </CardContent>
                    </Card>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">eSports</h1>
                    <p className="text-gray-600 text-lg">TENET 2025 • October 11th, 2025</p>
                    <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/20"><p className="text-gray-700 font-semibold">Complete all {FORM_STEPS.length} steps to register your team</p></div>
                </div>
                <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
                    <div className="flex items-center justify-between mb-4"><span className="font-semibold text-gray-700">Step {currentStep + 1} of {FORM_STEPS.length}</span><span className="text-blue-600 font-bold">{Math.round(progress)}% Complete</span></div>
                    <Progress value={progress} className="h-3 bg-gray-200" />
                    <div className="flex justify-between mt-4">{FORM_STEPS.map((step, index) => (<div key={step.id} className="text-center flex-1"><div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${index < currentStep ? 'bg-green-500 text-white shadow-lg' : index === currentStep ? 'bg-blue-500 text-white shadow-lg scale-110' : 'bg-gray-200 text-gray-400'}`}>{index < currentStep ? (<FaCheck className="text-sm" />) : (<step.icon />)}</div><span className={`text-sm font-medium ${index <= currentStep ? 'text-gray-800' : 'text-gray-400'}`}>{step.title}</span></div>))}</div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {renderStepContent()}
                        <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0} className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 h-12">← Previous</Button>
                            {currentStep < FORM_STEPS.length - 1 ? (
                                <Button type="button" onClick={nextStep} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 h-12 font-semibold shadow-lg">Next Step →</Button>
                            ) : (
                                <Button type="submit" disabled={submitting || !isFormValid} className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 h-12 font-semibold shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">{submitting ? (<span className="flex items-center gap-2"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>Submitting...</span>) : ('Submit')}</Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
            {showWhatsAppLink && <CongratulationsModal />}
        </div>
    );
}