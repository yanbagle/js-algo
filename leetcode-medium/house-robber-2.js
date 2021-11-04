/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Input: nums = [1,2,3]
Output: 3

*/

const rob = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  
  const [, ...arr1] = nums; 
  const arr2 = nums.slice(0,-1);
  
  const rob1 = helper(arr1);
  const rob2 = helper(arr2);
  
  return Math.max(rob1, rob2, nums[0]);
}

const helper = (nums) => {
  let rob1 = 0;
  let rob2 = 0;
  let temp; 
  
  nums.forEach(num => {
    temp = rob1;
    rob1 = Math.max(rob1, rob2 + num);
    rob2 = temp;
  });
  
  return rob1;
}









