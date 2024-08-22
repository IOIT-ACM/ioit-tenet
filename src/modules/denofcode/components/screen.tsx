import { EditorScreen } from './editor';

export const GameScreen = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center text-white'>
      <p>Den of code</p>
      <EditorScreen />
    </div>
  );
};
