import Image from "next/image";
import { TracingBeam } from '@/components/ui/tracing-beam';
import Link from "next/link";

import { day1, day2, day3 } from '@/config/events';
import { type ScheduleItemType } from "@/types";
const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];
const techfiesta_events: ScheduleItemType[] = allEvents.filter((event) => event.domain === 'techfiesta');

export const TracingBeamDemo = () => {
  return (
    <TracingBeam className="px-6 py-36  text-neutral-50">
      <div className="max-h-fit antialiased pt-4 relative" id="tracingbeam">
        {techfiesta_events.map((item: ScheduleItemType, index) => (
          <div key={`content-${index}`} className="mb-10">
            <Link href={`/events/${item.id}`}>
            <p className="text-xl mb-4 ">
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  width={1080}
                  height={720}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
