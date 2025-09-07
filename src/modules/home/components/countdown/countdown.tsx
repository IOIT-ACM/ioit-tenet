"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const MotionNumberFlow = motion(NumberFlow);

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  endDate: Date;
  className?: string;
}

export const ShiftingCountdown: React.FC<CountdownProps> = ({ endDate, className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / DAY);
        const hours = Math.floor((difference % DAY) / HOUR);
        const minutes = Math.floor((difference % HOUR) / MINUTE);
        const seconds = Math.floor((difference % MINUTE) / SECOND);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section id="timeline" className="flex flex-col items-center justify-center">
      <div className="relative inline-block w-full text-center mb-4">
        {/* Main text layer */}
        <h1 className="text-center text-4xl md:text-9xl font-extrabold inline-block">
          TENET&apos;25 BEGINS IN
        </h1>
      </div>

      <div className={`flex items-center justify-center gap-4 p-4 py-8 md:py-14 ${className}`}>
        <div className="flex flex-col items-center">
          <MotionNumberFlow
            value={timeLeft.days}
            className="font-[Inter] text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg tabular-nums"
            format={{ minimumIntegerDigits: 2 }}
          />
          <span className="text-sm font-semibold text-white/80 md:text-xl lg:text-lg">Days</span>
        </div>
        <div className="text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg relative" style={{ top: '-0.2em' }}>:</div>
        <div className="flex flex-col items-center">
          <MotionNumberFlow
            value={timeLeft.hours}
            className="font-[Inter] text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg tabular-nums"
            format={{ minimumIntegerDigits: 2 }}
          />
          <span className="text-sm font-semibold text-white/80 md:text-xl lg:text-lg">Hours</span>
        </div>
        <div className="text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg relative" style={{ top: '-0.2em' }}>:</div>
        <div className="flex flex-col items-center">
          <MotionNumberFlow
            value={timeLeft.minutes}
            className="font-[Inter] text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg tabular-nums"
            format={{ minimumIntegerDigits: 2 }}
          />
          <span className="text-sm font-semibold text-white/80 md:text-xl lg:text-lg">Minutes</span>
        </div>
        <div className="text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg relative" style={{ top: '-0.2em' }}>:</div>
        <div className="flex flex-col items-center">
          <MotionNumberFlow
            value={timeLeft.seconds}
            className="font-[Inter] text-4xl font-extrabold text-white md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg tabular-nums"
            format={{ minimumIntegerDigits: 2 }}
          />
          <span className="text-sm font-semibold text-white/80 md:text-xl lg:text-lg">Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default ShiftingCountdown;
