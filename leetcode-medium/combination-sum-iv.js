/*

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

Input: nums = [9], target = 3
Output: 0

*/

const combinationSum4 = (nums, target) => {
  if (!nums || !nums.length) {
    return 0;
  }
  
  const dp = [1];
  
  for (let total = 1; total <= target; total++) {
    dp[total] = 0;
    nums.forEach(n => {
      if (total - n >= 0) {
        dp[total] += dp[total - n];
      }
     }); 
  }
  
  return dp[target];
}



















