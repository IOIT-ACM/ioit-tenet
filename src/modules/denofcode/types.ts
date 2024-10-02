export interface TestCase {
  inputs: string[];
  outputs: string[];
}

export interface Bug {
  id: string;
  title: string;
  description: string;
  pythonCode: string;
  testCases: TestCase[];
}

export type Game = 'webmasterwars' | 'catchthebug' | null;
export type Language = 'cpp' | 'python';

export interface PlayerState {
  name: string;
  id: string;
  selectedGame: Game;
  language?: string;
  code?: string;
  bug?: Bug;
}

export interface TestResult {
  status: string;
  input: string;
  output: string;
  expected: string;
}

export interface PlayerGameState {
  bug: Bug | null;
  language: string;
}
