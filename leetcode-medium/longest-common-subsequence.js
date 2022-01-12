/*

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

*/

const longestCommonSubsequence = (text1, text2) =>  {
  const dp = [];
  for (let r = 0; r < text1.length + 1; r++) {
    dp[r] = [];
    for (let c = 0; c < text2.length + 1; c++) {
      dp[r][c] = 0;
    }
  }
  
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1.charAt(i) === text2.charAt(j)) {
        dp[i][j] = 1 + dp[i+1][j+1] // plus 1 because the chars match
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]); // max of its right or down neighbors 
      }
    }
  }
  
  return dp[0][0];
}