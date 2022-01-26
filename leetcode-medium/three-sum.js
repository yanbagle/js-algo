/*

https://leetcode.com/problems/3sum/

*/

const threeSum = (nums) => {
  const res = [];
  let l;
  let r;
  nums.sort((a,b) => {
     return a - b; 
  });  
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) { // we want to skip over same values because it would be have scanned through before
      continue;
    }
    // nums[i] = the first value
    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else { // if equal to 0, found our three sum
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l-1]) { // skipping over the same values for the same reason above 
          l++;
        }
      }
    }
  }
  
  return res;
  
}