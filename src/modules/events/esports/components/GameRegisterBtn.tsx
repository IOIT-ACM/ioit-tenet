import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// Define prop types
interface GameRegisterBtnProps {
  link: string;
}

const GameRegisterBtn: React.FC<GameRegisterBtnProps> = ({ link }) => {
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Use useCallback to ensure handleScroll is stable
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, hide the button
      setShowButton(false);
    } else {
      // If scrolling up, show the button
      setShowButton(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Ensure handleScroll is included in the dependency array

  return (
    <Link
      href={link} // Use the link prop
      target='_blank'
      rel='noopener noreferrer'
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform transition-opacity duration-300 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        className='group relative transform overflow-hidden rounded-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 px-8 py-3 font-mono font-bold uppercase text-white shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-indigo-500/50'
        style={{ willChange: 'transform' }}
      >
        <span className='relative z-10 flex items-center gap-2 text-lg'>
          Register Now
        </span>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20'></div>
      </button>
    </Link>
  );
};

export default GameRegisterBtn;
