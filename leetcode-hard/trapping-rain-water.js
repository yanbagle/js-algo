// https://leetcode.com/problems/trapping-rain-water/

const trap = (heights) => {
  
  let res = 0;
  let l = 0;
  let r = heights.length - 1;
  let leftMax = heights[l];
  let rightMax = heights[r];
  
  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, heights[l]);
      res += leftMax - heights[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, heights[r]);
      res += rightMax - heights[r];
    }
  }
  
  return res;
}