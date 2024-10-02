'use client';

import { BUGSEditor, Description, TestCases } from './bugs';

export const CatchTheBugScreen = () => {
  return (
    <div className='flex h-screen w-screen gap-4 p-4'>
      <div className='w-2/3'>
        <BUGSEditor />
      </div>
      <div className='flex w-1/3 flex-grow flex-col gap-5'>
        <Description />
        <TestCases />
      </div>
    </div>
  );
};
