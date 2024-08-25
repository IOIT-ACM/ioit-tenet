'use client';

import { HTMLEditor, HTMLPreview } from './editor/web';

export const WebMasterScreen = () => {
  return (
    <div className='flex h-screen w-screen gap-4 p-4'>
      <div className='w-1/2'>
        <HTMLEditor />
      </div>
      <div className='w-1/2'>
        <HTMLPreview />
      </div>
    </div>
  );
};
