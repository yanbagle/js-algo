/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

*/

const rob = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  
  const dp = [];
  dp[0] = 0; // base case, rob 0 houses, get 0 cash
  dp[1] = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i]);
  }
  
  return dp[nums.length];
}

const rob2 = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  
  let p1 = 0; // current running max
  let p2 = 0; // previous running max
  let temp; // for saving p1 value
  
  nums.forEach(n => {
    temp = p1;
    p1 = Math.max(p1, p2 + n);
    p2 = temp;
  });
  
  return p1;
}

const rob = (nums) => {
  let rob1 = 0;
  let rob2 = 0;
  let temp;
  
  // [rob1, rob2, n, n + 1, n + ...]
  for (const n of nums) {
    temp = Math.max(n + rob1, rob2); // makes sense since n is adjacent to rob2, so we can't add them together
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}
















