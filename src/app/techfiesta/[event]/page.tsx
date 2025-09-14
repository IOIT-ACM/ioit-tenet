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
        <section className=" max-w-7xl w-full mx-auto text-white flex flex-col items-center justify-center px-6 py-20">
            <TechfiestaHero event={event_data} />
            {/* Description */}
            <div className=" space-y-6 mt-20">
                <h2 className="text-4xl font-bold" style={{ fontFamily: 'BrickSans' }}>Description</h2>
                <p className="text-xl leading-relaxed text-gray-200">
                    {event_data.description}
                </p>

                {/* Details */}
                <div>
                    <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'BrickSans' }}>Details</h3>
                    <div className="list-none list-inside text-gray-300 space-y-1 ">
                        <li className="flex flex-row gap-2 items-center">
                            <p className="font-bold text-lg " style={{ fontFamily: 'BrickSans' }}>Date: </p>
                            <p className="text-xl">{event_data.date}</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <p className="font-bold text-lg " style={{ fontFamily: 'BrickSans' }}>Time: </p>
                            <p className="text-xl">{event_data.time}</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <p className="font-bold text-lg " style={{ fontFamily: 'BrickSans' }}>Venue: </p>
                            <p className="text-xl">{event_data.venue}</p>
                        </li>

                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-6 mt-8">
                    {event_data.manual && <Link
                        target="_blank"
                        href={event_data.manual}
                        className="bg-[#ffe57f] text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#ffeb99] transition"
                    >
                        Rulebook
                    </Link>}
                    {event_data.link && <Link
                        target="_blank"
                        href={event_data.link}
                        className="bg-[#ffe57f] text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#ffeb99] transition"
                    >
                        Register
                    </Link>}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 border w-full text-center  border-gray-700  px-20 py-10">

                <div className={"flex flex-col md:flex-row gap-10  justify-around"}>
                    {event_data.contacts.map(contact => <div key={contact.name} className="flex flex-col gap-2">
                        <p className="text-xl" style={{ fontFamily: 'BrickSans' }}>{contact.name}</p>
                        <Link href={`tel:${contact.mobile.split(" ").join("")}`} className="text-xl">{contact.mobile}</Link>
                    </div>)}

                </div>
            </footer>
        </section>
    );
}