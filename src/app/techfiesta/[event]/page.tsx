import { data } from "@/config/data/25/techfiesta";
import EventDetails from "./event-details";
import { notFound } from "next/navigation";
import EventBackground from "./event-background";

interface TechfiestaProps {
    params: { event: string }
}

export default function Techfiesta({ params }: TechfiestaProps) {
    const event_data = data.find(d => d.slug == params.event);
    if (!event_data) {
        return notFound();
    }

    return (
        <section className="relative w-full overflow-hidden">
            <EventBackground imageUrl={event_data.logo_img} />
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-20 text-white min-h-screen">
                <EventDetails event={event_data}/>
            </div>
        </section>
    );
}