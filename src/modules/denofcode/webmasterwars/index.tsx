'use client';

import { HTMLEditor } from './web';
import { Description } from './description';
import { SwitchTabs } from './tabs';

export const WebMasterScreen = () => {
  return (
    <div className='flex h-screen w-screen gap-4 p-4'>
      <div className='w-1/2'>
        <HTMLEditor />
      </div>

      <div className='flex w-1/3 flex-grow flex-col gap-5'>
        <SwitchTabs/>
        <Description />
      </div>
    </div>
  );
};
