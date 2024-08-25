export interface TestCase {
  inputs: string[];
  outputs: string[];
}

export interface Bug {
  id: string;
  title: string;
  description: string;
  pythonCode: string;
  cppCode: string;
  testCases: TestCase[];
}

export const bugs: Bug[] = [
  {
    id: 'bug1',
    title: 'Reverse String',
    description:
      'Implement a function to reverse a string. The input string is given as an array of characters s.',
    pythonCode: `
def Solution(s: List[str]) -> None:
    # Bug: This implementation doesn't actually reverse the string
    for i in range(len(s)):
        s[i] = s[i]

if __name__ == "__main__":
    solution = Solution(["h", "e", "l", "l", "o"])
    print(solution)
    `,
    cppCode: `
class Solution {
public:
    void reverseString(vector<char>& s) {
        // Bug: This implementation doesn't actually reverse the string
        for (int i = 0; i < s.size(); i++) {
            s[i] = s[i];
        }
    }
};
    `,
    testCases: [
      {
        inputs: ['hello'],
        outputs: ['olleh'],
      },
      {
        inputs: ['Hannah'],
        outputs: ['hannaH'],
      },
    ],
  },
  {
    id: 'bug2',
    title: 'Find Maximum Number',
    description:
      'Implement a function to find the maximum number in a list. The function should return the maximum value in the list.',
    pythonCode: `
def Solution(nums: List[int]) -> int:
    # Bug: This implementation always returns the first element
    max_num = nums[0]
    for num in nums:
        max_num = nums[0]
    return max_num

if __name__ == "__main__":
    solution = Solution([1, 3, 7, 2, 5])
    print(solution)
    `,
    cppCode: `
class Solution {
public:
    int findMax(vector<int>& nums) {
        // Bug: This implementation always returns the first element
        int max_num = nums[0];
        for (int num : nums) {
            max_num = nums[0];
        }
        return max_num;
    }
};
    `,
    testCases: [
      {
        inputs: ['[1, 3, 7, 2, 5]'],
        outputs: ['7'],
      },
      {
        inputs: ['[-1, -3, -7, -2, -5]'],
        outputs: ['-1'],
      },
    ],
  },
  {
    id: 'bug3',
    title: 'Check Palindrome',
    description:
      'Implement a function that checks if a string is a palindrome. A palindrome reads the same forward and backward.',
    pythonCode: `
def Solution(s: str) -> bool:
    # Bug: This implementation only checks the first and last characters
    return s[0] == s[-1]

if __name__ == "__main__":
    solution = Solution("racecar")
    print(solution)
    `,
    cppCode: `
class Solution {
public:
    bool isPalindrome(string s) {
        // Bug: This implementation only checks the first and last characters
        return s[0] == s[s.size() - 1];
    }
};
    `,
    testCases: [
      {
        inputs: ['racecar'],
        outputs: ['True'],
      },
      {
        inputs: ['hello'],
        outputs: ['False'],
      },
    ],
  },
  {
    id: 'bug4',
    title: 'Sum of Elements',
    description:
      'Implement a function to calculate the sum of all elements in an integer list.',
    pythonCode: `
def Solution(nums: List[int]) -> int:
    # Bug: This implementation only adds the first element repeatedly
    total = 0
    for num in nums:
        total += nums[0]
    return total

if __name__ == "__main__":
    solution = Solution([1, 2, 3, 4, 5])
    print(solution)
    `,
    cppCode: `
class Solution {
public:
    int sumElements(vector<int>& nums) {
        // Bug: This implementation only adds the first element repeatedly
        int total = 0;
        for (int num : nums) {
            total += nums[0];
        }
        return total;
    }
};
    `,
    testCases: [
      {
        inputs: ['[1, 2, 3, 4, 5]'],
        outputs: ['15'],
      },
      {
        inputs: ['[10, 20, 30]'],
        outputs: ['60'],
      },
    ],
  },
  {
    id: 'bug5',
    title: 'Count Vowels',
    description:
      'Implement a function to count the number of vowels in a given string.',
    pythonCode: `
def Solution(s: str) -> int:
    # Bug: This implementation only counts the vowels 'a' and 'e'
    count = 0
    for char in s:
        if char == 'a' or char == 'e':
            count += 1
    return count

if __name__ == "__main__":
    solution = Solution("hello")
    print(solution)
    `,
    cppCode: `
class Solution {
public:
    int countVowels(string s) {
        // Bug: This implementation only counts the vowels 'a' and 'e'
        int count = 0;
        for (char c : s) {
            if (c == 'a' || c == 'e') {
                count++;
            }
        }
        return count;
    }
};
    `,
    testCases: [
      {
        inputs: ['hello'],
        outputs: ['2'],
      },
      {
        inputs: ['programming'],
        outputs: ['3'],
      },
    ],
  },
];
