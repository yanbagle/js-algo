// https://leetcode.com/problems/move-zeroes/

const moveZeroes = (arr) => {
  
  let count = 0; // non zeros count
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  
  return arr;
}