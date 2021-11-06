/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

const longestConsecutive = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  
  const set = {};
  nums.forEach(num => {
    set[num] = true;
  });
  
  let longest = 0;
  let length = 0;
  nums.forEach(num => {
    if (!set[num - 1]) { // check if num is a leading number
      while (set[num + length]) {
        length++;
      }
      longest = Math.max(longest, length);
      length = 0;
    }  
  });
  
  return longest;
}










