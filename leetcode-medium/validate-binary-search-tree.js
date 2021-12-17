/*

Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

https://leetcode.com/problems/validate-binary-search-tree/

*/

const isValidBST = (root) => {
  return valid(root, -Number.MAX_VALUE, Number.MAX_VALUE);
}

const valid = (node, leftBoundary, rightBoundary) => {
  if (!node) {
    return true;
  }
  if (node.val > leftBoundary && node.val < rightBoundary) {
    return valid(node.left, leftBoundary, node.val) && valid(node.right, node.val, rightBoundary);
  }
  
  return false;
}