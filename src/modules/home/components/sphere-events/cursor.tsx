import { useEffect, useRef } from 'react';
import { BsArrows } from 'react-icons/bs';
import gsap from 'gsap';

export function CursorArrow({ visible }: { visible: boolean }) {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (visible) {
        gsap.to(arrowRef.current, {
          duration: 1.3,
          x: event.clientX,
          y: event.clientY + 25,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [visible]);

  return (
    <div
      ref={arrowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        color: 'white',
        zIndex: 10,
        opacity: visible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      <BsArrows size={40} className='z-[999]' />
    </div>
  );
}
