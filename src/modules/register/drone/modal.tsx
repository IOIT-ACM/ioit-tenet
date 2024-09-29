/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const CongratulationsModal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    const launchConfetti = () => {
      myConfetti({
        particleCount: 100,
        spread: 70,
        startVelocity: 30,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        gravity: 0.5,
        scalar: 0.9,
        shapes: ['circle', 'square'],
        ticks: 400,
        colors: [
          '#ff4d00',
          '#ff5e00',
          '#ff8000',
          '#ffa200',
          '#b23500',
          '#d84000',
          '#0d8dbf',
          '#0d77bf',
          '#0da1bf',
        ],
      });

      myConfetti({
        particleCount: 60,
        spread: 120,
        startVelocity: 45,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        gravity: 0.7,
        scalar: 1.2,
        shapes: ['square'],
        ticks: 300,
        colors: [
          '#ff4d00',
          '#ff5e00',
          '#ff8000',
          '#ffa200',
          '#b23500',
          '#d84000',
          '#0d8dbf',
          '#0d77bf',
          '#0da1bf',
          '#6d4c41',
        ],
      });
    };

    const interval = setInterval(() => {
      launchConfetti();
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed inset-0 z-[9999999999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'>
      <canvas
        ref={canvasRef}
        className='fixed left-0 top-0 h-screen w-screen'
      />
      <div
        className='mx-4 w-full max-w-md transform rounded-xl bg-white p-8 text-center shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='mb-6 text-3xl font-bold text-green-600'>
          Congratulations!
        </h2>
        <p className='mb-8 text-lg text-gray-700'>
          Welcome to TENET 2024, see you on Oct 4th 2024 at 10 AM
        </p>
        <p className='mb-8 text-base text-gray-700'>
          Please don&#39;t forget to join the Whatsapp group after submission.
        </p>

        <Link
          href='https://chat.whatsapp.com/GTGi7YvqQZVCHtgKCNVMkk'
          className='mb-6 flex items-center justify-center rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-green-600'
        >
          <FaWhatsapp className='mr-2 text-xl' />
          Join WhatsApp Group
        </Link>
      </div>
    </div>
  );
};

export default CongratulationsModal;
