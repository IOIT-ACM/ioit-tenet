/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import MonacoEditor, { type OnChange } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useStore, type Language } from '@/store';
import { bugs } from './bugconfig';
import { Separator } from '@/components/ui/separator';
import { evaluateCode } from './evaluation';

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
  const [timeLeft, setTimeLeft] = useState(150);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='rounded bg-white p-4 text-black shadow'>
      <div>
        <h3 className='text-2xl font-semibold'>Player Info</h3>
        <p className='text-gray-800'>
          <span className='font-medium'>Name:</span>{' '}
          {playerState.name ?? 'Unknown'}
        </p>
        <p className='text-gray-800'>
          <span className='font-medium'>Selected Game:</span>{' '}
          {playerState.selectedGame ?? 'None'}
        </p>
        <p className='text-gray-800'>
          <span className='font-medium'>Language:</span>{' '}
          {playerState.language ?? 'Not selected'}
        </p>
        <p className='pt-3 font-bold text-gray-900'>
          <span>Time Left:</span> {formatTime(timeLeft)}
        </p>
        {timeLeft === 0 && (
          <>
            <p className='text-sm text-orange-700'>
              Time limit is over, but you can still continue solving the bug!
            </p>
            <p className='text-sm text-orange-700'>
              In order to win the goodies, you must solve the bug in less than 3
              minutes
            </p>
          </>
        )}
      </div>

      <Separator className='my-3' />

      <h2 className='mb-2 text-3xl font-bold'>
        {playerState.bug?.title ?? 'Loading'}
      </h2>
      <p className='mb-4 text-gray-700'>
        {playerState.bug?.description ?? 'Loading'}
      </p>
    </div>
  );
};

export const TestCases = () => {
  const playerState = useStore.use.playerState();
  const [evaluationResult, setEvaluationResult] = useState<string | null>(null);

  const handleEvaluate = async () => {
    setEvaluationResult('Evaluating...');
    try {
      const result = await evaluateCode(
        playerState.code!,
        playerState.bug?.testCases,
        playerState.language,
      );
      setEvaluationResult(result);
    } catch (error) {
      setEvaluationResult('Error compiling');
    }
  };

  return (
    <div className='rounded bg-white p-4 text-black shadow'>
      <h3 className='mb-2 text-2xl font-bold'>Test Cases</h3>
      <Separator className='my-3' />
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
      <Separator className='my-3' />
      <button
        className='rounded-lg bg-green-500 px-3 py-2'
        onClick={handleEvaluate}
      >
        Evaluate
      </button>

      {evaluationResult && (
        <div>
          <div className='mt-4 text-xl font-semibold'>
            <p>Test cases passing status: </p>
          </div>
          <p>{evaluationResult}</p>
        </div>
      )}
    </div>
  );
};
