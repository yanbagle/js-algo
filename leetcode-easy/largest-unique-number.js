/*
  
Given an array of integers A, return the largest integer that only occurs once.

If no integer occurs once, return -1.

Input: [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: 
The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.

Input: [9,9,8,8]
Output: -1
Explanation: 
There is no number that occurs only once.

*/

const largestUniqueNumber = (arr) => {
  if (!arr || !arr.length) {
    return -1;
  }
  
  const sortedArr = arr.sort((a, b) => {
    return b - a; // descending order
  });
  
  for (let i = 1; i < sortedArr.length - 1; i ++) {
    // check the number before and after to see they're not dups
    if (sortedArr[i] !== sortedArr[i+1] && sortedArr[i] !== sortedArr[i-1]) {
      return sortedArr[i];
    }
  }
  return -1;
}