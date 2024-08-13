import type { FC, ReactNode } from 'react';

type KeyboardRowProps = {
  children: ReactNode;
};

export const KeyboardRow: FC<KeyboardRowProps> = ({ children }) => {
  return (
    <div className={'flex w-full flex-row justify-between gap-[0.1px]'}>
      {children}
    </div>
  );
};
