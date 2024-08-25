// Define types for test cases
interface TestCase {
  inputs: string[];
  outputs: string[];
}

// Define a type for the WASM module interface
export interface WasmModule {
  compile: (code: string) => Promise<void>;
  run: (input: string[]) => Promise<string[]>;
}

// Mock WASM modules (you'll need to replace these with actual WASM module imports)
// const cppWasmModule: WasmModule = {
//   compile: async (code: string) => {
//     /* Implementation */
//   },
//   run: async (input: string[]) => {
//     /* Implementation */
//   },
// };

// const pythonWasmModule: WasmModule = {
//   compile: async (code: string) => {
//     /* Implementation */
//   },
//   run: async (input: string[]) => {
//     /* Implementation */
//   },
// };

export async function evaluateCode(
  code: string,
  testCases: TestCase[] | undefined,
  language: string | undefined,
): Promise<string> {
  //   let wasmModule: WasmModule;

  if (testCases) {
    // Select the appropriate WASM module based on the language
    switch (language) {
      case 'cpp':
        // wasmModule = cppWasmModule;
        break;
      case 'python':
        // wasmModule = pythonWasmModule;
        break;
      default:
        throw new Error('Unsupported language');
    }

    // try {
    //   // Compile the code
    //   await wasmModule.compile(code);

    //   // Run each test case
    //   for (const testCase of testCases) {
    //     const result = await wasmModule.run(testCase.inputs);

    //     // Compare the result with expected output
    //     if (!arraysEqual(result, testCase.outputs)) {
    //       return 'Test case failed';
    //     }
    //   }

    //   // If all test cases pass
    //   return 'Success';
    // } catch (error) {
    //   console.error('Compilation or runtime error:', error);
    //   return 'Error compiling';
    // }
    return 'Incomplete compilation, WASM module not developed by the developer yet 🫶';
  } else {
    return 'Error compiling';
  }
}

// Helper function to compare arrays
export function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}
