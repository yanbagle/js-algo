// https://leetcode.com/problems/insert-into-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
const insertIntoBST = (root, val) => {
  
  if (!root) {
    return new TreeNode(val);
  }
  
  let currentNode = root;
  
  while (currentNode) {
    if (val < currentNode.val) { // left subtree
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val);
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else { // right subtree
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val);
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  
  return root;
}