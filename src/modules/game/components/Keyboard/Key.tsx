import { type FC } from 'react';

type KeyboardKeyProps = {
  value: string;
  grow?: boolean;
};

export const KeyboardKey: FC<KeyboardKeyProps> = ({ value, grow }) => {
  return (
    <div
      className={`lg:text-md m-0.5 flex w-full justify-center rounded-md border border-slate-300 p-0.5 text-xs sm:p-3 md:m-[0.7] md:text-sm lg:m-1 lg:p-4 ${grow ? 'grow-[5]' : `grow`}`}
      data-keyboard-key={value}
    >
      {value}
    </div>
  );
};
