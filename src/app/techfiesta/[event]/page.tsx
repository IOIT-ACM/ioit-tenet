import { data } from "@/config/data/25/techfiesta";

import EventDetails from "./event-details";
import { notFound } from "next/navigation";

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
            <EventDetails event={event_data}/>
            {/* <TechfiestaHero event={event_data} /> */}
        </section>
    );
}