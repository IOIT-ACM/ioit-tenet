'use client';

import { ScheduleItem } from './scheduleitem';
import { day1, day2, day3 } from '@/config/data/26/events';
import { Separator } from '@/components/ui/separator';
import { FollowCursor } from './cursor';
import React, { useMemo, useState, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const Schedule = () => {
  const [collapsed, setCollapsed] = useState<number[]>([]);

  const toggle = (day: number) =>
    setCollapsed((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  const boundaryRef = useRef(null);

  const d1 = useMemo(() => {
    if (!collapsed.includes(1)) return day1;
    return day1.filter((item) => item.imp).slice(0, 4);
  }, [collapsed]);

  const d2 = useMemo(() => {
    if (!collapsed.includes(2)) return day2;
    return day2.filter((item) => item.imp).slice(0, 4);
  }, [collapsed]);

  const d3 = useMemo(() => {
    if (!collapsed.includes(3)) return day3;
    return day3.filter((item) => item.imp).slice(0, 4);
  }, [collapsed]);

  return (
    <section
      id="schedule"
      className="relative mx-5 mb-20 mt-0 grid grid-cols-1 justify-center text-white transition-all md:mx-auto md:max-w-7xl md:grid-cols-7 md:p-5"
    >
      <div className="sticky top-0 z-40 self-start bg-neutral-950 md:top-10 md:col-span-2">
        <h1 className="mb-3 mt-5 w-full text-4xl font-black uppercase text-zinc-50 md:mb-10 md:mt-0 md:text-4xl">
          Schedule
        </h1>

        {/* <div className="gap- hidden pb-2 text-slate-300 md:grid">
          <Link className="w-fit transition-all hover:underline" href={'/register'}>
            Registrations
          </Link>
          <Link className="w-fit transition-all hover:underline" href={'/24/events'}>
            View full Agenda
          </Link>
          <Link className="w-fit transition-all hover:underline" href={'/24/speakers'}>
            View Speakers Lineup
          </Link>
        </div> */}
      </div>

      <div ref={boundaryRef} className="w-full md:col-span-5">
        <div id="day1events" className="mb-8 mt-20 md:mt-0">
          <div className="mb-4 flex w-full items-center justify-between text-3xl font-bold text-slate-300">
            <span>Day 1 Events</span>
            <span>
              {!collapsed.includes(1) ? (
                <IoIosArrowUp
                  onClick={() => toggle(1)}
                  className="cursor-pointer transition-all hover:scale-125"
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => toggle(1)}
                  className="cursor-pointer transition-all hover:scale-125"
                />
              )}
            </span>
          </div>
          <Separator className="my-4 max-w-full bg-slate-300 md:max-w-36" />
          {d1.map((item, index) => (
            <React.Fragment key={`Day1-${index}`}>
              <FollowCursor data={item} classname="scale-90">
                <ScheduleItem data={item} />
              </FollowCursor>
            </React.Fragment>
          ))}
        </div>

        <div id="day2events" className="mb-8">
          <div className="mb-4 flex w-full items-center justify-between text-3xl font-bold text-slate-300">
            <span>Day 2 Events</span>
            <span>
              {!collapsed.includes(2) ? (
                <IoIosArrowUp
                  onClick={() => toggle(2)}
                  className="cursor-pointer transition-all hover:scale-125"
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => toggle(2)}
                  className="cursor-pointer transition-all hover:scale-125"
                />
              )}
            </span>
          </div>
          <Separator className="my-4 max-w-full bg-slate-300 md:max-w-36" />
          {d2.map((item, index) => (
            <React.Fragment key={`Day2-${index}`}>
              <FollowCursor data={item} classname="scale-90">
                <ScheduleItem data={item} />
              </FollowCursor>
            </React.Fragment>
          ))}
        </div>

        <div id="day3events">
          <div className="mb-4 flex w-full items-center justify-between text-3xl font-bold text-slate-300">
            <span>Day 3 Events</span>
            <span>
              {!collapsed.includes(3) ? (
                <IoIosArrowUp
                  onClick={() => toggle(3)}
                  className="cursor-pointer transition-all hover:scale-125"
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => toggle(3)}
                  className="cursor-pointer transition-all hover:scale-125"
                />
              )}
            </span>
          </div>
          <Separator className="my-4 max-w-full bg-slate-300 md:max-w-36" />
          {d3.map((item, index) => (
            <React.Fragment key={`Day3-${index}`}>
              <FollowCursor data={item} classname="scale-90">
                <ScheduleItem data={item} />
              </FollowCursor>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
