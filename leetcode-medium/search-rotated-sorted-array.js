/*

https://leetcode.com/problems/search-in-rotated-sorted-array/

*/

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let m;
  
  while (l <= r) {
    m = Math.floor((l+r) / 2);
    if (nums[m] === target) {
      return m;
    }
    
    // left sorted portion
    //       l   m   r
    // e.g. [3,4,5,1,2]  T = 1
    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) { // search right 
        l = m + 1;
      } else { // search left
        r = m - 1;
      }
    }
    // right sorted portion
    //       l   m   r
    // e.g. [5,4,3,2,1]  T = 4
    else {
      if (target < nums[m] || target > nums[r]) { // search left
        r = m - 1;
      } else { // search right 
        l = m + 1;
      }
    }
  }
  
  return -1;
}