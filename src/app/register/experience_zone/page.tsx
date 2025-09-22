'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ChevronDown, CheckSquare, Dribbble, Compass, Rocket, ArrowLeft, Glasses } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
    name: string;
    college: string;
    contact: string;
    email: string;
    interests: string[];
}

const experienceZones = [
    {
        id: 'ps5',
        title: 'PS5 Zone',
        description: 'Compete in BGMI and FIFA (FC 24) on PS5 consoles. Show off your gaming skills and grab the top spot!',
        icon: <Dribbble className="h-6 w-6" />,
    },
    {
        id: 'aicricket',
        title: 'AI Cricket Lab',
        description: 'Play cricket while an AI captures your moves, turns them into art, and rates your speed, accuracy, and style.',
        icon: <CheckSquare className="h-6 w-6" />,
    },
    {
        id: 'carsim',
        title: 'Racing Car Simulator',
        description: 'Experience realistic driving on virtual tracks and test your driving skills in a safe environment.',
        icon: <Rocket className="h-6 w-6" />,
    },
    {
        id: 'cyclesim',
        title: 'Cycle Simulator',
        description: 'Cycle through virtual terrains, from city streets to mountains, for fun and fitness.',
        icon: <Compass className="h-6 w-6" />,
    },
    {
        id: 'arvr',
        title: 'AR/VR Zone',
        description: 'Immerse yourself in virtual reality experiences with cutting-edge headsets and interactive games.',
        icon: <Glasses className="h-6 w-6" />,
    },
];

interface AccordionItemProps {
    title: string;
    sectionId: string;
    isOpen: boolean;
    setOpen: (id: string | null) => void;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, sectionId, isOpen, setOpen, children, icon }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.to(contentRef.current, { height: 'auto', duration: 0.5, ease: 'power3.inOut' });
            } else {
                gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: 'power3.inOut' });
            }
        }
    }, [isOpen]);

    return (
        <div className="w-full rounded-lg border border-[#00F0FF]/30 bg-black/30 shadow-[0_0_10px_rgba(0,240,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-[#FF4DBB]/50 hover:shadow-[0_0_15px_rgba(255,77,187,0.2)]">
            <button
                onClick={() => setOpen(isOpen ? null : sectionId)}
                className="flex w-full items-center justify-between p-4 text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-[#00F0FF]">{icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                        {title}
                    </h3>
                </div>
                <ChevronDown
                    className={cn('h-6 w-6 text-[#00F0FF] transition-transform duration-500', isOpen && 'rotate-180')}
                />
            </button>
            <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
                <div className="p-4 pt-0 text-[#D1D5DB] text-sm md:text-base">{children}</div>
            </div>
        </div>
    );
};

export default function ExpZonePage() {
    const [openSection, setOpenSection] = useState<string | null>('ps5');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        college: '',
        contact: '',
        email: '',
        interests: [],
    });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const API_URL = '/api/exp-zone';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const newInterests = checked
                ? [...prevData.interests, value]
                : prevData.interests.filter((interest) => interest !== value);
            return { ...prevData, interests: newInterests };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmissionStatus('submitting');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({ name: '', college: '', contact: '', email: '', interests: [] });
            } else {
                throw new Error('Form submission failed.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-10 py-8 md:py-16 px-4 font-sans text-white bg-[#0c0418]">
            <div className="bg-[#0c0418] p-6 md:p-8 w-full max-w-4xl backdrop-blur-sm rounded-xl">
                <div className="mb-8 mt-4 flex items-center justify-start">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 rounded-md border border-pink-500/50 bg-black/30 px-4 py-2 text-pink-400 shadow-[0_0_8px_theme(colors.pink.500)] transition-all hover:scale-105 hover:shadow-[0_0_15px_theme(colors.pink.500)]"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back
                    </button>
                </div>
                <div className="relative w-full mx-auto rounded-t-lg overflow-hidden" style={{ aspectRatio: '1920 / 557' }}>
                    <Image
                        src="/25/techfiesta/graphics/banner.png"
                        alt="TechFiesta Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:mt-8">
                    <section className="space-y-4 md:space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wide">Experience Zones</h2>
                        <div className="space-y-3 md:space-y-4">
                            {experienceZones.map((zone) => (
                                <AccordionItem
                                    key={zone.id}
                                    title={zone.title}
                                    sectionId={zone.id}
                                    isOpen={openSection === zone.id}
                                    setOpen={setOpenSection}
                                    icon={zone.icon}
                                >
                                    <p className="text-sm">{zone.description}</p>
                                </AccordionItem>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4 md:space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wide">Interest Form</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 md:space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-transparent border-2 border-[#7A1FA2] focus:border-[#00F0FF] p-2 rounded-lg text-sm md:text-base transition-all duration-300 outline-none placeholder-[#D1D5DB]/60"
                                required
                            />
                            <input
                                type="text"
                                name="college"
                                placeholder="College"
                                value={formData.college}
                                onChange={handleInputChange}
                                className="bg-transparent border-2 border-[#7A1FA2] focus:border-[#00F0FF] p-2 rounded-lg text-sm md:text-base transition-all duration-300 outline-none placeholder-[#D1D5DB]/60"
                                required
                            />
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                className="bg-transparent border-2 border-[#7A1FA2] focus:border-[#00F0FF] p-2 rounded-lg text-sm md:text-base transition-all duration-300 outline-none placeholder-[#D1D5DB]/60"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-transparent border-2 border-[#7A1FA2] focus:border-[#00F0FF] p-2 rounded-lg text-sm md:text-base transition-all duration-300 outline-none placeholder-[#D1D5DB]/60"
                                required
                            />

                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {experienceZones.map((zone) => (
                                    <label
                                        key={zone.id}
                                        className={`border-2 p-3 text-center text-sm md:text-base cursor-pointer rounded-lg backdrop-blur-sm transition-all duration-300 ${formData.interests.includes(zone.title) ? 'border-[#00F0FF] bg-[#00F0FF]/20 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-[#7A1FA2] bg-white/5 hover:border-[#C77DFF]'}`}
                                    >
                                        <input
                                            type="checkbox"
                                            name="interests"
                                            value={zone.title}
                                            checked={formData.interests.includes(zone.title)}
                                            onChange={handleCheckboxChange}
                                            className="hidden"
                                        />
                                        <span className="font-semibold text-white">{zone.title}</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={submissionStatus === 'submitting'}
                                className="rounded-md border border-pink-500 bg-black/30 px-5 py-2 text-pink-400 shadow-[0_0_8px_theme(colors.pink.500)] transition-shadow hover:shadow-[0_0_15px_theme(colors.pink.500)] mt-4 md:mt-6"
                            >
                                {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit'}
                            </button>

                            {submissionStatus === 'success' && <p className="text-[#00F0FF] text-center text-sm md:text-base mt-2">Thanks for your interest!</p>}
                            {submissionStatus === 'error' && <p className="text-[#FF4DBB] text-center text-sm md:text-base mt-2">Submission failed. Please try again.</p>}
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}