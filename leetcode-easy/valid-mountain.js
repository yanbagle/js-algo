/*

https://leetcode.com/problems/valid-mountain-array/

Input: arr = [2,1]
Output: false

Input: arr = [3,5,5]
Output: false

Input: arr = [0,3,2,1]
Output: true

*/

const validMountainArray = (arr) => {
  if (!arr || arr.length < 3) {
    return false;
  }
  
  let isIncreasing = true;
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      return false;
    }
    if (isIncreasing && arr[i] > arr[i+1]) {
      isIncreasing = false;
    } else if (!isIncreasing && arr[i] < arr[i+1]) {
      return false;
    }
  }
  
  return true;
  
}
