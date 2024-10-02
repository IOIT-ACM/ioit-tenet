/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import MonacoEditor, { type OnChange } from '@monaco-editor/react';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { bugs } from './bugconfig';
import { Separator } from '@/components/ui/separator';
import { usePython } from 'react-py';
import { GameDuration } from '@/config';
import type { PlayerGameState, TestResult } from '../types';

export const BUGSEditor = () => {
  const playerState = useStore.use.playerState();
  const setPlayerState = useStore.use.setPlayerState();

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
      <div className='flex-grow'>
        <MonacoEditor
          height='100%'
          width='100%'
          language={playerState.language}
          value={playerState.bug?.pythonCode}
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
  const [timeLeft, setTimeLeft] = useState(GameDuration);

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
    <div className='bg-white p-4 text-black shadow'>
      <div>
        <h3 className='text-2xl font-semibold'>Player Info</h3>
        <p className='text-gray-800'>
          <span className='font-medium'>Name:</span>{' '}
          {playerState.name ?? 'Unknown'}
        </p>
        <p className='text-gray-800'>
          <span className='font-medium'>Booking ID:</span> {playerState.id}
        </p>
        <p className='text-gray-800'>
          <span className='font-medium'>Selected Game:</span>{' '}
          {playerState.selectedGame === 'catchthebug'
            ? 'Catch the bug'
            : 'Web Master Wars'}
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
              In order to win the goodies, you must solve the bug in less than{' '}
              {GameDuration} seconds
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

export const TestCases: React.FC = () => {
  const playerState = useStore.use.playerState() as PlayerGameState;
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const handleEvaluate = async () => {
    try {
      await runPython(playerState.bug?.pythonCode ?? '');
      const results = stdout
        .split('\n\n')
        .filter(Boolean)
        .map((testCase) => {
          const [status, input, output, expected] = testCase.split('\n');
          return { status, input, output, expected } as TestResult;
        });
      setTestResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white p-4 text-black shadow'>
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
      {!isLoading ? (
        <div>
          <button
            className='rounded-lg bg-green-500 px-3 py-2'
            onClick={handleEvaluate}
          >
            {isRunning ? 'Evaluating' : 'Evaluate'}
          </button>
          {testResults.map((result, index) => (
            <div key={index} className='mt-2'>
              <p>{result.status}</p>
              <p>{result.input}</p>
              <p>{result.output}</p>
              <p>{result.expected}</p>
            </div>
          ))}
          {stderr && <div className='text-red-500'>{stderr}</div>}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
