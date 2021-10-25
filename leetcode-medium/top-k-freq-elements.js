/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]

*/

const topKFrequent = (nums, k) => {
  if (!nums || !nums.length) {
    return [];
  }
  
  const freqTable = {};
  
  nums.forEach((num) => {
    freqTable[num] = freqTable[num] ? freqTable[num] + 1 : 1;
  });
    
  const freqArr = [];
  
  for (const num in freqTable) {
    freqArr[freqTable[num]] = freqArr[freqTable[num]] ? [...freqArr[freqTable[num]], num] : [num] 
  }
  
  const topKFreq = [];
  while (k > 0) {
    const numbers = freqArr.pop();
    if (numbers && numbers.length) {
      for (let j = 0; j < numbers.length; j++) {
        topKFreq.push(Number(numbers[j]));
        k--;
      }
    }
  }
  return topKFreq;
}






