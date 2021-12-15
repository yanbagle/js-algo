/*

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

https://leetcode.com/problems/subtree-of-another-tree/

*/

const isSubtree = (root, subRoot) => {
  if (!subRoot) {
    return true;
  }
  if (!root) {
    return false;
  }
  
  if (isSameTree(root, subRoot)) {
    return true;
  }
  
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

const isSameTree = (s, t) => {
  if (!s && !t) { 
    return true;
  }
  if (s && t && s.val === t.val) {
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  }
  return false;
}