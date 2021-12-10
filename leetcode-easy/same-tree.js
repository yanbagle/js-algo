/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

const isSameTree = (p, q) => {
  if (!p && !q) { // if we reach all the way to the last nodes and they're both null
    return true;
  } 
  if (!p || !q || p.val !== q.val) { // if at any point, they're not the same
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

