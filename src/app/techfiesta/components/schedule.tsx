import { schedule } from '@/config/data/26/techfiesta';
import Reveal from './reveal';
import SplitText from './split-text';

export default function Schedule() {
  return (
    <section id="schedule" className="w-full bg-white px-5 pb-[clamp(100px,27vw,490px)] pt-16 sm:px-10 md:px-[120px] md:pt-20">
      <Reveal className="mb-10 flex flex-col gap-4 md:mb-12 md:gap-5">
        <div
          className="text-base font-medium tracking-[0.16em] text-[#0000c8] sm:text-lg md:text-[22px]"
          style={{ fontFamily: 'var(--font-pixelify)' }}
        >
          TWO DAYS
        </div>
        <h2 className="text-4xl font-bold leading-none sm:text-6xl md:text-[80px]" style={{ fontFamily: 'var(--font-pixelify)' }}>
          <SplitText text="Plan your weekend." />
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {schedule.map((day, index) => {
          const dark = index === 1;
          return (
            <Reveal
              key={day.day}
              delay={index * 100}
              className={`box-border p-7 sm:p-8 ${dark ? 'tf-card-dark bg-[#050530] text-white' : 'tf-card bg-white text-[#050530]'} border-[3px] border-[#050530]`}
            >
              <div className="mb-6 flex items-baseline justify-between">
                <div className="flex items-baseline gap-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  <span className={`text-5xl font-bold leading-none tabular-nums sm:text-7xl ${dark ? 'text-[#8c96ff]' : 'text-[#0000c8]'}`}>
                    {day.day}
                  </span>
                  <span className="text-xl font-bold tracking-[0.06em] sm:text-[28px]">{day.date}</span>
                </div>
                <span
                  className={`text-sm font-medium tracking-[0.16em] sm:text-xl ${dark ? 'text-[#dfe3ff]' : 'text-[#2b2d5c]'}`}
                  style={{ fontFamily: 'var(--font-pixelify)' }}
                >
                  {day.weekday}
                </span>
              </div>
              <div className="flex flex-col">
                {day.items.map((item) => (
                  <div
                    key={item.event}
                    className={`flex items-center justify-between gap-6 border-t-2 py-4 ${dark ? 'border-[#3a3d8f]' : 'border-[#050530]'}`}
                  >
                    <span className="text-xl font-semibold sm:text-[28px]" style={{ fontFamily: 'var(--font-pixelify)' }}>
                      {item.event}
                    </span>
                    <span
                      className={`flex-none text-sm font-semibold tabular-nums sm:text-base ${dark ? 'text-[#dfe3ff]' : 'text-[#2b2d5c]'}`}
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
