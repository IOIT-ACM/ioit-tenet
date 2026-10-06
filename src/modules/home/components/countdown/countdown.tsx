"use client";

import { useEffect, useState } from "react";
import s from "./countdown.module.scss";

const TARGET_DATE = new Date("2026-10-23T08:30:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const distance = TARGET_DATE.getTime() - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    expired: false,
  };
}

interface CountdownProps {
  className?: string;
}

export const ShiftingCountdown: React.FC<CountdownProps> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="timeline" className="flex flex-col items-center justify-center">
      <div
        className={`relative inline-block w-full text-center ${className ?? ""}`}
      >
        <div className={s.countdown}>
          <div className={s.unit}>
            <div className={s.value}>{timeLeft.days.toString().padStart(2, "0")}</div>
            <div className={`${s.label} text-slate-400`}>Days</div>
          </div>
          <div className={s.separator}>:</div>
          <div className={s.unit}>
            <div className={s.value}>{timeLeft.hours.toString().padStart(2, "0")}</div>
            <div className={`${s.label} text-slate-400`}>Hours</div>
          </div>
          <div className={s.separator}>:</div>
          <div className={s.unit}>
            <div className={s.value}>{timeLeft.minutes.toString().padStart(2, "0")}</div>
            <div className={`${s.label} text-slate-400`}>Minutes</div>
          </div>
          <div className={s.separator}>:</div>
          <div className={s.unit}>
            <div className={s.value}>{timeLeft.seconds.toString().padStart(2, "0")}</div>
            <div className={`${s.label} text-slate-400`}>Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftingCountdown;
