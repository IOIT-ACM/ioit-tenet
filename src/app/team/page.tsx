import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamCard from "@/components/ui/team-card";
import { core, hackathon, mun, techfiesta } from "@/config/data/25/team";

export const metadata = {
    title: "Team | TENET 2025",
    description:
        "Meet the team behind TENET 2025! Discover the faces and roles of the passionate individuals who are working tirelessly to make the fest a grand success.",
    keywords: "Team, TENET, AISSMS IOIT, Fest, College, Organizers, ACM",
    openGraph: {
        title: "Team | TENET 2025",
        description:
            "Meet the team behind TENET 2025! Discover the faces and roles of the passionate individuals who are working tirelessly to make the fest a grand success.",
        url: "https://tenet.in/team",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "TENET 2025 Team",
            },
        ],
        siteName: "TENET 2025",
        type: "website",
        locale: "en_US",
    },
};

const Team = () => {
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
                    {/* Floating Tabs */}
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
