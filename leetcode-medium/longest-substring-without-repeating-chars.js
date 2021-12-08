/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = ""
Output: 0

*/

const lengthOfLongestSubstring = (str) => {
  if (!str || !str.length) {
    return 0;
  } else if (str.length === 1) {
    return 1;
  }
  
  let i = 0;
  let j = 0;
  let maxLength = 0;
  const charTable = {};
  
  while (j < str.length) {
    if (charTable[str.charAt(j)]) {
      delete charTable[str.charAt(i)];
      i++;
    } else {
      charTable[str.charAt(j)] = true;
      j++;
      maxLength = Math.max(Object.keys(charTable).length, maxLength);
    }
  }
  
  return maxLength;
}

































