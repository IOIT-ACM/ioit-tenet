/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import MonacoEditor, { type OnChange } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useStore, type Language } from '@/store';
import { bugs } from './bugconfig';
import { Separator } from '@/components/ui/separator';
import { usePython } from 'react-py';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className={`rounded px-4 py-2 ${playerState.language === 'cpp' ? 'bg-blue-500 text-white' : 'bg-none'}`}
              onClick={() => handleLanguageSelection('cpp')}
            >
              C++
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>C++ not supported yet</AlertDialogTitle>
              <AlertDialogDescription>
                Current modules only support python code. Please change your
                language to Python
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => handleLanguageSelection('python')}
              >
                Switch to Python
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
              In order to win the goodies, you must solve the bug in less than
              150 seconds minutes
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

interface TestCase {
  inputs: string[];
  outputs: string[];
}

interface Bug {
  id: string;
  title: string;
  description: string;
  pythonCode: string;
  cppCode: string;
  testCases: TestCase[];
}

interface TestResult {
  status: string;
  input: string;
  output: string;
  expected: string;
}

interface PlayerState {
  bug: Bug | null;
  language: string;
}

export const TestCases: React.FC = () => {
  const playerState = useStore.use.playerState() as PlayerState;
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
