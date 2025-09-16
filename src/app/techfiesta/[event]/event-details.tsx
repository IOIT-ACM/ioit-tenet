import type { TechfiestaData } from "@/config/data/25/techfiesta";
import Link from "next/link";
import Image from "next/image";

interface TechfiestaProps {
  event: TechfiestaData;
}

export default function EventDetails({ event }: TechfiestaProps) {
  return (
    <div className="mt-20 w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex col-span-2 md:col-auto flex-col w-full items-center gap-6">
          {event.logo_img && (
            <div className="relative h-64 w-64 overflow-hidden">
              <Image
                src={event.logo_img}
                alt={`${event.time} logo`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="w-full rounded-lg border border-pink-500 bg-black/30 p-4 shadow-[0_0_10px_theme(colors.pink.500)] backdrop-blur-sm">
            <h3
              className="mb-2 text-xl font-semibold text-[#FF4DBB]"
              style={{ fontFamily: "BrickSans" }}
            >
              Details
            </h3>
            <ul className="space-y-2 text-gray-100 text-sm sm:text-base">
              <li>
                <span className="font-bold">Date: </span>
                {event.date}
              </li>
              <li>
                <span className="font-bold">Time: </span>
                {event.time}
              </li>
              <li>
                <span className="font-bold">Venue: </span>
                {event.venue}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 rounded-lg border border-cyan-400 bg-black/30 p-6 shadow-[0_0_15px_theme(colors.cyan.400)] backdrop-blur-sm">
          <h2
            className="mb-4 text-2xl font-semibold text-[#FF4DBB] sm:text-3xl"
            style={{ fontFamily: "BrickSans" }}
          >
            Description
          </h2>
          <p className="text-base leading-relaxed text-gray-100 sm:text-lg">
            {event.description}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {event.slug && (
          <Link
            target="_blank"
            href={event.slug}
            className="rounded-md border border-pink-500 bg-black/30 px-5 py-2 text-pink-400 shadow-[0_0_8px_theme(colors.pink.500)] hover:shadow-[0_0_15px_theme(colors.pink.500)]"
          >
            Register
          </Link>
        )}
        {event.manual && (
          <Link
            target="_blank"
            href={event.manual}
            className="rounded-md border border-purple-500 bg-black/30 px-5 py-2 text-purple-400 shadow-[0_0_8px_theme(colors.purple.500)] hover:shadow-[0_0_15px_theme(colors.purple.500)]"
          >
            Content
          </Link>
        )}
        <Link
          href="/techfiesta"
          className="rounded-md border border-cyan-400 bg-black/30 px-5 py-2 text-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] hover:shadow-[0_0_15px_theme(colors.cyan.400)]"
        >
          All Events
        </Link>
      </div>
    </div>
  );
}
