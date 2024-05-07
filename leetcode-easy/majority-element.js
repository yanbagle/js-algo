/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

const majorityElement = (arr) => {
  const freqCount = {};
  for (let ele of arr) {
    if (freqCount[ele]) {
      const currCount = freqCount[ele] + 1;
      if (currCount > arr.length / 2) {
        return ele;
      }
      freqCount[ele] = currCount;
    } else {
      freqCount[ele] = 1;
    }
  }
};

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const majorityElement = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }

  const countTable = {};

  for (const num of arr) {
    if (countTable[num]) {
      countTable[num]++;
      if (countTable[num] > arr.length / 2) {
        return num;
      }
    } else {
      countTable[num] = 1;
    }
  }
};
