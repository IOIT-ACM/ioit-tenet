import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const CongratulationsModal = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'>
      <div
        className='mx-4 w-full max-w-md transform rounded-xl bg-white p-8 text-center shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='mb-6 text-3xl font-bold text-green-600'>
          Congratulations!
        </h2>
        <p className='mb-8 text-lg text-gray-700'>
          Welcome to TENET 2024, see you on Oct 4th 2024 at 1 PM
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
