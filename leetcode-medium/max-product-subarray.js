/*

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

const maxProduct = (nums) => {
  let res = Math.max(...nums);
  let max = 1;
  let min = 1;
  let tempMax;
  
  for (const n of nums) {
    tempMax = max;
    max = Math.max(n * max, n * min, n);    
    min = Math.min(n * tempMax, n * min, n); 
    res = Math.max(max, res);
  }
  
  return res;
}