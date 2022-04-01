/*

https://leetcode.com/problems/coin-change-2/

similar to combination sum IV

difference here is no permuations of combinations of ways are allowed 

*/


const change = (amount, coins) => {
  const dp = [1];
  for (let i = 1; i <= amount; i++) {
    dp[i] = 0;
  }
  
  for (let c of coins) {
    for (let a = 1; a <= amount; a++) {
      if (a - c >= 0) {
        dp[a] += dp[a - c];
      }
    }
  }
  
  return dp[amount];
}