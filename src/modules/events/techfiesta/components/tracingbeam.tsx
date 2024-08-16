"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from '@/components/ui/tracing-beam';
import Link from "next/link";
import { day1 } from "@/config/events";

export const TracingBeamDemo = () => {
  return (
    <TracingBeam className="px-6 py-36  text-neutral-50">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {day1.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 cursor-pointer">
            <Link href={`/events/${item.id}`}>
            <p className="text-xl mb-4 ">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
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
