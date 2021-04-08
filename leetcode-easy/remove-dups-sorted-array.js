/*

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

*/

const removeDupsSortedArray = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  
  let currNum = arr[0];
  let arrIndex = 1;
  
  while (arrIndex < arr.length) {
    if (currNum === arr[arrIndex]) {
      arr.splice(arrIndex, 1);
    } else {
      currNum = arr[arrIndex];
      arrIndex++;
    }
  }
  
  return arr.length;
}

const a = [1,1,2,2,3,4,5,6,6];
console.log(removeDupsSortedArray(a));
console.log(a);