"use client";
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamCard from "@/components/ui/team-card";
import LinktreeCard from "./linktree"; // New component
import Link from 'next/link';
import { core, hackathon, mun, techfiesta } from "@/config/data/25/team";

const Team = () => {
    const searchParams = useSearchParams();
    const nameParam = searchParams.get('n')?.toLowerCase();

    const findMember = () => {
        const allMembers = [...core, ...hackathon, ...mun, ...techfiesta];
        return allMembers.find(m =>
            m.name.toLowerCase().includes(nameParam ?? '')
        );
    };

    const member = nameParam ? findMember() : null;

    if (nameParam && member) {
        return (
            <div className="min-h-screen bg-[#121212] text-white px-4 py-12">
                <div className="max-w-md mx-auto text-center">
                    <Link
                        href="/team"
                        className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Team
                    </Link>
                    <LinktreeCard {...member} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-8 md:px-16 py-12 md:py-20">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-20">
                <h1 className="font-black text-3xl sm:text-4xl md:text-5xl mb-4">
                    Meet the Team<br className="sm:hidden" /> of TENET 2025
                </h1>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl">
                    We are the driving force behind TENET 2025! Reach out to us for any queries or collaborations.
                </p>
            </div>

            {/* Tabs Section */}
            <div className="max-w-7xl mx-auto">
                <Tabs defaultValue="core" className="w-full">
                    <TabsList className="mb-12 flex gap-2 md:gap-4 justify-start bg-transparent">
                        <TabsTrigger
                            value="core"
                            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold text-gray-400
              data-[state=active]:text-[#bb86fc] data-[state=active]:bg-transparent
              rounded-none border-b-2 border-transparent data-[state=active]:border-[#bb86fc]
              transition-colors hover:text-white"
                        >
                            Core Team
                        </TabsTrigger>
                        <TabsTrigger
                            value="hackathon"
                            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold text-gray-400
              data-[state=active]:text-[#bb86fc] data-[state=active]:bg-transparent
              rounded-none border-b-2 border-transparent data-[state=active]:border-[#bb86fc]
              transition-colors hover:text-white"
                        >
                            Hackathon
                        </TabsTrigger>
                        <TabsTrigger
                            value="mun"
                            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold text-gray-400
              data-[state=active]:text-[#bb86fc] data-[state=active]:bg-transparent
              rounded-none border-b-2 border-transparent data-[state=active]:border-[#bb86fc]
              transition-colors hover:text-white"
                        >
                            MUN Team
                        </TabsTrigger>
                        <TabsTrigger
                            value="techfiesta"
                            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold text-gray-400
              data-[state=active]:text-[#bb86fc] data-[state=active]:bg-transparent
              rounded-none border-b-2 border-transparent data-[state=active]:border-[#bb86fc]
              transition-colors hover:text-white"
                        >
                            Techfiesta
                        </TabsTrigger>
                    </TabsList>

                    {/* Team Grids */}
                    <TabsContent value="core">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {core.map((member, index) => (
                                <TeamCard key={index} {...member} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="hackathon">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {hackathon.map((member, index) => (
                                <TeamCard key={index} {...member} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="mun">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {mun.map((member, index) => (
                                <TeamCard key={index} {...member} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="techfiesta">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {techfiesta.map((member, index) => (
                                <TeamCard key={index} {...member} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Team;
