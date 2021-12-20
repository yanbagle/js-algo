/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

https://leetcode.com/problems/kth-smallest-element-in-a-bst/

*/

let arr = [];

const kthSmallest = (root, k) => {
  inorder(root);
  return arr[k - 1];
}

const inorder = (node) => {
  if (node !== null) {
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }
}