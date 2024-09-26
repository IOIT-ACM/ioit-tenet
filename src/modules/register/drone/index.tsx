'use client';

import { useState } from 'react';
import { FaUser, FaUsers } from 'react-icons/fa';
import SingleDroneRegisterForm from './singleform';
import GroupDroneRegisterForm from './groupform';

export default function RegisterForm() {
  const [isGroup, setIsGroup] = useState<boolean | null>(null);

  const handleSelection = (selection: string) => {
    setIsGroup(selection === 'group');
  };

  return (
    <div className='mb-20 flex w-full flex-col items-center justify-center'>
      {isGroup === null ? (
        <div className='w-full rounded-xl bg-white p-5 shadow-lg md:w-2/3 md:p-10'>
          <h2 className='mb-5 text-center text-2xl font-semibold text-gray-800'>
            Choose Registration Type
          </h2>

          <p className='mb-8 text-center text-lg text-gray-600'>
            Are you registering as a single user or as a group of 5?
          </p>

          <div className='mb-8 flex flex-col items-start rounded-lg bg-slate-100 p-4'>
            <p className='mb-2 text-gray-700'>
              <span className='font-medium'>Single User: </span>
              550 ₹
            </p>
            <p className='text-gray-700'>
              <span className='font-medium'>Group of 5: </span>
              500 ₹ per person <br /> (Total:{' '}
              <span className='font-semibold text-green-600'>
                <span className='line-through'>2,750</span> 2500 ₹
              </span>
              )
            </p>
            <p className='mt-2 text-sm text-gray-500'>
              Save 50 ₹ per person by registering as a group!
            </p>
          </div>

          {/* Button Section */}
          <div className='flex flex-col gap-4'>
            <button
              className='flex w-full items-center justify-center gap-3 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600'
              onClick={() => handleSelection('single')}
            >
              <FaUser className='text-xl' /> Register as Single User
            </button>
            <button
              className='flex w-full items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600'
              onClick={() => handleSelection('group')}
            >
              <FaUsers className='text-xl' /> Register as Group of 5
            </button>
          </div>
        </div>
      ) : isGroup ? (
        <GroupDroneRegisterForm />
      ) : (
        <SingleDroneRegisterForm />
      )}
    </div>
  );
}
