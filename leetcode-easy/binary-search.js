/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

*/

const binarySearch = (arr, target) => {
  if (!arr || !arr.length) {
    return -1;
  }
  
  let left = 0;
  let right = arr.length - 1;
  let middle;
  
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) { // found it
      return middle;      
    } 
    target > arr[middle] ? left = middle + 1 : right = middle - 1;
  }
  
  return -1;
}