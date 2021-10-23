/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = (s, t) => {
  if (!s || !t || s.length !== t.length) {
    return false;
  }
  
  const freqTable = {};
  
  for (const c of s) {
    freqTable[c] = freqTable[c] ? freqTable[c]+1 : 1;
  }
  
  
  for (const c of t) {
    if (freqTable[c] || freqTable[c] === 0) {
      freqTable[c]--;
    }  
    if (freqTable[c] === undefined || freqTable[c] < 0) {
      return false;
    }
  }
  
  return true;
}