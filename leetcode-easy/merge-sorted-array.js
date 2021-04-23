/*

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. in place. 
@return {void} Do not return anything, modify nums1 in-place instead.

*/

const mergeSortedArray = (nums1, nums2) => {
  if (!nums1 || !nums2) {
    return null;
  }
  
  let c1 = 0;
  let c2 = 0;
  
  const longestLength = Math.max(nums1.length, nums2.length);
  
  for (let i = 0; i < longestLength; i++) {
    if (nums2[c2] <= nums1[c1]) {
      nums1.splice(i, 0, nums2[c2]);
      c1++;
      c2++;
    } else {
      c1++;
    } 
  } 
  
  nums1 = [...nums1, ...nums2.splice(c2, nums2.length - c2)];
  return nums1;
  
}