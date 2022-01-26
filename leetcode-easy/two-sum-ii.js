/*

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

*/

const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;
  let sum;
  
  while (l < r) {
    sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    }
    
    if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    }
  }
  return [];
}