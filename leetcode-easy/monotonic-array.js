/*

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

*/

const isMonotonicArray = (arr) => {
  if (!arr || arr.length === 0) {
    return false;
  }
  
  let isIncreasing = true;
  let isDecreasing = true;
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i+1]) {
      isIncreasing = false;
    }
    if (arr[i] > arr[i+1]) {
      isDecreasing = false;
    }
  }
  
  return isIncreasing || isDecreasing;
}