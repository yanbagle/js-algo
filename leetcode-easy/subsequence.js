/*

Given two strings s and t, check if s is a subsequence of t.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false

*/

const isSubsequence = (s, t) => {
  if (!s || !t || s.length > t.length) {
    return false;
  }
  
  let sIndex = 0;
  
  for (const c of t) {
    if (c === s.charAt(sIndex)) {
      if (sIndex === s.length - 1) { // at the last index
        return true;          
      }
      sIndex++;
    } 
  }
  
  return false;
}