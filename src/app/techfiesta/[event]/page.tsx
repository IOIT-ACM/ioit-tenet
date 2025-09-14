import { data } from "@/config/data/25/techfiesta";

import Link from "next/link";
import { notFound } from "next/navigation";
import TechfiestaHero from "../hero";

interface TechfiestaProps {
    params: { event: string }
}
export default function Techfiesta({ params }: TechfiestaProps) {

    const event_data = data.find(d => d.slug == params.event);
    if (!event_data) {
        return notFound();
    }


    return (
        <section className="max-w-7xl w-full mx-auto text-white flex flex-col items-center justify-center px-6 py-20">
            <TechfiestaHero event={event_data} />
            <div className="grid gap-10 mt-20 w-full">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#FF4DBB]" style={{ fontFamily: 'BrickSans', textShadow: '0 0 8px #FF4DBB' }}>Description</h2>
                    <p className="text-base sm:text-xl leading-relaxed text-gray-100">
                        {event_data.description}
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#FF4DBB]" style={{ fontFamily: 'BrickSans', textShadow: '0 0 8px #FF4DBB' }}>Details</h3>
                    <ul className="list-none list-inside text-gray-100 space-y-2">
                        <li className="flex flex-row gap-2 items-center">
                            <p className="font-bold text-base sm:text-lg" style={{ fontFamily: 'BrickSans' }}>Date: </p>
                            <p className="text-base sm:text-xl">{event_data.date}</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <p className="font-bold text-base sm:text-lg" style={{ fontFamily: 'BrickSans' }}>Time: </p>
                            <p className="text-base sm:text-xl">{event_data.time}</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <p className="font-bold text-base sm:text-lg" style={{ fontFamily: 'BrickSans' }}>Venue: </p>
                            <p className="text-base sm:text-xl">{event_data.venue}</p>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-20">
                    <Link
                        href="/techfiesta"
                        className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg bg-black/30 backdrop-blur-sm border border-cyan-400 text-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] hover:shadow-[0_0_20px_theme(colors.cyan.400)]"
                    >
                        All Events
                    </Link>
                    {event_data.manual && <Link
                        target="_blank"
                        href={event_data.manual}
                        className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg bg-black/30 backdrop-blur-sm border border-cyan-400 text-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] hover:shadow-[0_0_20px_theme(colors.cyan.400)]"
                    >
                        Rulebook
                    </Link>}
                    {event_data.link && <Link
                        target="_blank"
                        href={event_data.link}
                        className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg bg-black/30 backdrop-blur-sm border border-pink-500 text-pink-500 shadow-[0_0_8px_theme(colors.pink.500)] hover:shadow-[0_0_20px_theme(colors.pink.500)]"
                    >
                        Register
                    </Link>}
                </div>
            </div>

            <footer className="my-20 w-full text-center p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-lg border border-[#00F0FF]/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-10 justify-around items-center">
                    {event_data.contacts.map(contact => (
                        <div key={contact.name} className="flex flex-col gap-1 sm:gap-2">
                            <p className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: 'BrickSans' }}>{contact.name}</p>
                            <Link href={`tel:${contact.mobile.split(" ").join("")}`} className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                                {contact.mobile}
                            </Link>
                        </div>
                    ))}
                </div>
            </footer>

            <div className="flex flex-wrap justify-center gap-6 my-8">
                <a
                    href="https://discord.gg/dkVV2VDw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 bg-black/30 backdrop-blur-sm border border-blue-500 text-blue-400 shadow-[0_0_8px_theme(colors.blue.500)] hover:shadow-[0_0_20px_theme(colors.blue.500)]"
                >
                    Join Discord
                </a>
                <a
                    href="https://www.instagram.com/ioit_tenet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 bg-black/30 backdrop-blur-sm border border-pink-500 text-pink-500 shadow-[0_0_8px_theme(colors.pink.500)] hover:shadow-[0_0_20px_theme(colors.pink.500)]"
                >
                    Follow on Instagram
                </a>
            </div>
        </section>
    );
}