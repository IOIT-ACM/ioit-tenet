'use client';

import { useEffect, useRef, useState } from 'react';

const TARGET_ISO = '2026-10-24T17:00:00+05:30';

export interface Countdown {
  d: string;
  h: string;
  m: string;
  s: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

function diffToCountdown(now: number): Countdown {
  const target = Date.parse(TARGET_ISO);
  let diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  diff -= d * 86400000;
  const h = Math.floor(diff / 3600000);
  diff -= h * 3600000;
  const m = Math.floor(diff / 60000);
  diff -= m * 60000;
  const s = Math.floor(diff / 1000);
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}

const PLACEHOLDER_COUNTDOWN: Countdown = { d: '00', h: '00', m: '00', s: '00' };

/**
 * Starts from a static placeholder (identical on server and first client render) and only
 * switches to the real, time-based value inside `useEffect` — computing it from `Date.now()`
 * during render would make the server-rendered markup and the client's first render disagree
 * (they run at different instants), which React flags as a hydration mismatch.
 */
export function useCountdown(): Countdown {
  const [cd, setCd] = useState<Countdown>(PLACEHOLDER_COUNTDOWN);

  useEffect(() => {
    setCd(diffToCountdown(Date.now()));
    const id = setInterval(() => setCd(diffToCountdown(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  return cd;
}

/**
 * Reveal-on-scroll: marks the root "armed" once mounted (so elements only hide via CSS after
 * hydration, avoiding an SSR flash-of-hidden-content), then flips `.hw-in` on `.hw-rv`
 * descendants as they enter the viewport.
 */
export function useReveal<T extends HTMLElement>() {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const scroller = document.scrollingElement ?? document.documentElement;
    const canScroll = scroller.scrollHeight > window.innerHeight + 40;

    if (!('IntersectionObserver' in window) || reduced || !canScroll) return undefined;

    root.classList.add('hw-arm');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hw-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    root.querySelectorAll('.hw-rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return rootRef;
}

/**
 * Drives the hero "flashlight" mask: follows the pointer/touch when active, and drifts on an
 * ambient path after ~2.5s of no interaction so the effect still reads on touch-only devices.
 */
export function useHeroLight<T extends HTMLElement>() {
  const heroRef = useRef<T | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return undefined;

    const light = { x: 0, y: 0, tx: 0, ty: 0, touched: 0 };
    const r0 = hero.getBoundingClientRect();
    light.x = light.tx = r0.width * 0.76;
    light.y = light.ty = r0.height * 0.34;

    const move = (cx: number, cy: number) => {
      const r = hero.getBoundingClientRect();
      light.tx = cx - r.left;
      light.ty = cy - r.top;
      light.touched = Date.now();
    };
    const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) move(t.clientX, t.clientY);
    };
    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('touchmove', onTouchMove, { passive: true });
    hero.addEventListener('touchstart', onTouchMove, { passive: true });

    const t0 = Date.now();
    let raf = 0;
    const loop = () => {
      if (Date.now() - light.touched > 2500) {
        const t = (Date.now() - t0) / 1000;
        const w = hero.clientWidth;
        const h = hero.clientHeight;
        light.tx = w * (0.5 + 0.34 * Math.sin(t * 0.45));
        light.ty = h * (0.5 + 0.34 * Math.sin(t * 0.31 + 1.2));
      }
      light.x += (light.tx - light.x) * 0.08;
      light.y += (light.ty - light.y) * 0.08;
      hero.style.setProperty('--mx', `${light.x.toFixed(1)}px`);
      hero.style.setProperty('--my', `${light.y.toFixed(1)}px`);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('touchmove', onTouchMove);
      hero.removeEventListener('touchstart', onTouchMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return heroRef;
}

/** Subtle pointer-driven 3D tilt for the ticket cards; a no-op on touch/coarse pointers. */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches) return undefined;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform .12s';
      el.style.transform = `translateY(-10px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg)`;
    };
    const onLeave = () => {
      el.style.transition = 'transform .6s cubic-bezier(.2,.8,.1,1)';
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}

/** Magnetic pull-toward-cursor effect for the primary CTAs. */
export function useMagnet<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches) return undefined;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transition = 'transform .15s';
      el.style.transform = `translate(${dx * 0.28}px,${dy * 0.28}px)`;
    };
    const onLeave = () => {
      el.style.transition = 'transform .7s cubic-bezier(.3,1.6,.5,1)';
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}

/** Custom ring cursor: follows the pointer, grows over links/buttons. Desktop pointer only. */
export function useCustomCursor<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches) return undefined;

    const ring = { x: -100, y: -100, tx: -100, ty: -100 };
    const onMove = (e: MouseEvent) => {
      ring.tx = e.clientX;
      ring.ty = e.clientY;
      el.style.opacity = '1';
      const target = e.target as Element | null;
      const hot = target?.closest('a,button,.hw-tk');
      el.classList.toggle('hw-cur-hot', Boolean(hot));
    };
    const onLeaveDoc = () => {
      el.style.opacity = '0';
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeaveDoc);

    let raf = 0;
    const loop = () => {
      ring.x += (ring.tx - ring.x) * 0.2;
      ring.y += (ring.ty - ring.y) * 0.2;
      el.style.transform = `translate(${ring.x.toFixed(1)}px,${ring.y.toFixed(1)}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeaveDoc);
      cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}

interface BatSpec {
  key: string;
  style: React.CSSProperties;
  fill: string;
}

/** Deterministic seeded PRNG so bat placement matches between server and client render. */
function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function useBatSwarm(count = 26): BatSpec[] {
  const [bats] = useState<BatSpec[]>(() => {
    const rnd = makeRng(11);
    const swarm: BatSpec[] = [];
    for (let i = 0; i < count; i += 1) {
      const t = rnd();
      const xPct = 38 + t * 58 + rnd() * 4;
      const yPct = 8 + (1 - Math.pow(rnd(), 0.8)) * 74 - t * 6;
      const w = 12 + rnd() * 22;
      swarm.push({
        key: `bat-${i}`,
        fill: rnd() > 0.45 ? '#8a2f10' : '#5e200b',
        style: {
          position: 'absolute',
          left: `${xPct.toFixed(1)}%`,
          top: `${Math.max(4, Math.min(92, yPct)).toFixed(1)}%`,
          width: `${w.toFixed(0)}px`,
          transform: `rotate(${(-25 + rnd() * 50).toFixed(0)}deg)`,
          opacity: (0.55 + rnd() * 0.45).toFixed(2),
          animation: `hw-float ${(4 + rnd() * 4).toFixed(1)}s ease-in-out infinite`,
        },
      });
    }
    const big: Array<[number, number, number, number]> = [
      [72, 19, 56, -8],
      [86, 15, 40, 12],
      [78, 33, 78, -4],
      [94, 28, 34, 18],
      [63, 10, 28, 6],
    ];
    big.forEach(([x, y, w, r], i) => {
      swarm.push({
        key: `bat-big-${i}`,
        fill: '#141612',
        style: {
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          width: `${w}px`,
          transform: `rotate(${r}deg)`,
          animation: `hw-float ${5 + i}s ease-in-out infinite`,
        },
      });
    });
    return swarm;
  });

  return bats;
}
