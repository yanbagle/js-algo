/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

const twoSum = (nums, target) => {
  const map = {}; // key: num, value: index of num in nums array
  let compliment; 

  for (let i = 0; i < nums.length; i++) {
    compliment = target - nums[i];
    if (map[compliment] !== undefined) { // since a 0 index can be falsely 
      return [map[compliment], i];
    }
    map[nums[i]] = i;
  }
}