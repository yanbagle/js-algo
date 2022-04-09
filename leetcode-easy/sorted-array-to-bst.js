/*

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/

const sortedArrayToBST = (nums) => {
  return helper(0, nums.length - 1);
}

const helper = (l, r, nums) => {
  if (r < l) {
    return null;
  }
  
  const m = Math.floor(l + r / 2);
  const root = new TreeNode(nums[m]);  
  root.left = helper(l, m - 1);
  root.right = helper(m + 1, r);
  
  return root;
}