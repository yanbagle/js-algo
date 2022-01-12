/*

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

*/

const wordBreak = (s, wordDict) => {
  const sLen = s.length;
  const dp = new Array(sLen + 1).fill(false);
  dp[sLen] = true;
  
  for (let i = sLen - 1; i >= 0; i--) {
    for (const word of wordDict) {
      if (i + word.length <= sLen && s.substring(i, i + word.length) === word) {
        // instead of doing dp[i] = true, this ensures every word/char in s is accounted for 
        // e.g. s = 'catdog' wd = ['cat,'mouse'], dp[0] is true but no match for dog, so dp[0] will be false too 
        dp[i] = dp[i + word.length];
      }
      if (dp[i]) {
        break; // skipping to the next index because we already found match
      }
    }
  }
  
  return dp[0];
}