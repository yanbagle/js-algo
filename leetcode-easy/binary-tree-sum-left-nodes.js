/*

Given the root of a binary tree, return the sum of all left leaves.

https://leetcode.com/problems/sum-of-left-leaves/

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

*/

const sumLeftNodes = (root) => {
  if (!root) {
    return 0;
  }
  return sum(root, 0, false);
}

const sum = (node, total, isLeftNode) => {
  if (node !== null) {
    if (isLeftNode) {
      total += node.data;
    }
    total = sum(node.left, total, true);
    total = sum(node.right, total, false);
  }
  return total;
}
