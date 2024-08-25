/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import MonacoEditor, { type OnChange } from '@monaco-editor/react';
import { useEffect } from 'react';
import { useStore, type Language } from '@/store';
import { bugs } from './bugconfig';

export const BUGSEditor = () => {
  const playerState = useStore.use.playerState();
  const setPlayerState = useStore.use.setPlayerState();

  const handleLanguageSelection = (language: Language) => {
    setPlayerState({
      ...playerState,
      language: language,
    });
  };

  const onChange: OnChange = (value) => {
    if (playerState.bug) {
      const updatedValue = value ?? '';
      if (playerState.language === 'python') {
        setPlayerState({
          ...playerState,
          bug: {
            ...playerState.bug,
            pythonCode: updatedValue,
          },
        });
      } else {
        setPlayerState({
          ...playerState,
          bug: {
            ...playerState.bug,
            cppCode: updatedValue,
          },
        });
      }
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bugs.length);

    setPlayerState({
      ...playerState,
      language: 'python',
      bug: bugs[randomIndex],
    });
  }, []);

  return (
    <div className='flex h-full flex-col'>
      <div className='flex'>
        <button
          className={`mr-2 rounded px-4 py-2 ${playerState.language === 'python' ? 'bg-blue-500 text-white' : 'bg-none'}`}
          onClick={() => handleLanguageSelection('python')}
        >
          Python
        </button>
        <button
          className={`rounded px-4 py-2 ${playerState.language === 'cpp' ? 'bg-blue-500 text-white' : 'bg-none'}`}
          onClick={() => handleLanguageSelection('cpp')}
        >
          C++
        </button>
      </div>

      <div className='mt-5 flex-grow'>
        <MonacoEditor
          height='100%'
          width='100%'
          language={playerState.language}
          value={
            playerState.language === 'python'
              ? playerState.bug?.pythonCode
              : playerState.bug?.cppCode
          }
          onChange={onChange}
          theme='vs-dark'
          options={{
            minimap: {
              enabled: true,
            },
            fontSize: 14,
            wordWrap: 'on',
          }}
        />
      </div>
    </div>
  );
};

export const Description = () => {
  const playerState = useStore.use.playerState();

  return (
    <div className='rounded bg-white p-4 text-black shadow'>
      <h2 className='mb-2 text-2xl font-bold'>
        {playerState.bug?.title ?? 'Loading'}
      </h2>
      <p className='text-gray-700'>
        {playerState.bug?.description ?? 'Loading'}
      </p>
    </div>
  );
};

export const TestCases = () => {
  const playerState = useStore.use.playerState();

  return (
    <div className='rounded bg-white p-4 text-black shadow'>
      <h3 className='mb-2 text-xl font-bold'>Test Cases</h3>
      {playerState.bug?.testCases ? (
        playerState.bug?.testCases.map((testCase, index) => (
          <div key={index} className='mb-2'>
            <p>Input: {testCase.inputs.join(', ')}</p>
            <p>Expected Output: {testCase.outputs.join(', ')}</p>
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
      <div className='mt-4'>
        <p>Test cases passing status: </p>
        {/* Add logic for test case passing status here */}
      </div>
    </div>
  );
};
