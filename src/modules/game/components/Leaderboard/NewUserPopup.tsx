import { type FC } from 'react';

import { type LeaderboardItem } from '@/types';

type NewUserPopupProps = {
  item: LeaderboardItem;
};

export const NewUserPopup: FC<NewUserPopupProps> = ({ item }) => {
  return (
    <div
      className={
        'fly absolute right-0 top-[-61px] w-[200px] rounded-md bg-gray-800 p-2'
      }
    >
      <h1 className={'text-md font-bold text-gray-300'}>New User!</h1>
      <p className={'text-sm text-gray-300'}>
        {item.nickname} ({item.points} points)
      </p>
    </div>
  );
};
