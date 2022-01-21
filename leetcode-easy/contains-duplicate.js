/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

const containsDuplicate = (arr) => {  
  
  const countTable = {};
  
  for (const num of arr) {
    if (countTable[num]) {
      return true;
    }
    countTable[num] = 1;
  }
  
  return false;
}


/*

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Input: nums = [1,2,3,1], k = 3
Output: true

Input: nums = [1,0,1,1], k = 1
Output: true

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

*/

const containsNearbyDuplicate = (arr, k) => {
  if (!arr || arr.length === 0) {
    return false;
  }
  
  /*
  e.g.
  {
    count : 1,
    indices: [0,3]
  }
  */
  const countIndexTable = {};
  let num;
  
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (countIndexTable[num]) {
      const {count, indices} = countIndexTable[num];
      if (i - indices[indices.length - 1] <= k) {
        return true;
      }
      countIndexTable[num] = {
        count: count+1, indices: [...indices, i]
      }
    } else {
      countIndexTable[num] = {
        count: 1,
        indices: [i]
      }
    }
  }
  
  return false; 
  
}










