/*

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

*/

const findMin = (nums) => {
  let min = nums[0];
  let l = 0;
  let r = nums.length - 1;
  let m;
  
  while (l <= r) {
    if (nums[l] < nums[r]) { // we found the sorted portion
      min = Math.min(min, nums[l]);
      break;
    }
    
    m = Math.floor((l + r) / 2);
    min = Math.min(nums[m], min);
    if (nums[m] >= nums[l]) { // search right
      l = m + 1;
    } else { // search left
      r = m - 1;
    }
  }
  
  return min;
}