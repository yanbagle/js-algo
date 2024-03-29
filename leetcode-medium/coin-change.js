/*

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

O(number of coins * amount count)
*/

const coinChange = (coins, amount) => {  
  const dp = [0];
  
  for (let i = 1; i <= amount; i++) {
    dp[i] = amount + 1;
  }
  
  for (let a = 1; a <= amount; a++) {
    for (let c of coins) {
      if (c <= a) {
        dp[a] = Math.min(dp[a], dp[a - c]);
      }
    }
  }
  
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
}

/*******************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************/

const coinChange = (coins, amount) => {
  const dp = [];
  dp[0] = 0;
  
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = amount + 1;
  }
  
  for (let a = 1; a < amount + 1; a++) {
    for (let c of coins) {
      if (c <= a) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
}

/*******************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************/

const coinChange = (coins, amount) => {
  const dp = [];
  dp[0] = 0; // it takes 0 coins to make 0 change
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = amount + 1; // sets it to the max amount possible for now
  }
  
  for (let a = 1; a < amount + 1; a++) {
    for (let c of coins) {
      if (c <= a) { // if coin is bigger than the amount, then we can't use that coin
          dp[a] = Math.min(dp[a], 1 + dp[a - c]); // plus one because we are adding one amount more than the last dp
        }
    }
  }
  
  return dp[amount] !== amount + 1 ? dp[amount] : -1; // if not the default value that we gave it, then return dp[amount]  
  
}








