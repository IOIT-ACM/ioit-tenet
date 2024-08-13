import { Keyboard } from './Keyboard';
import { InputWords } from './input-words';
import { ConveyorBelt } from './conveyor-belt';

export const GameScreen = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='opacity-25'>
        <Keyboard />
      </div>
      <InputWords />
      <ConveyorBelt />
    </div>
  );
};
