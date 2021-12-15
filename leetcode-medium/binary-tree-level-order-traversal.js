/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

https://leetcode.com/problems/binary-tree-level-order-traversal/

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

*/

const levelOrder = (root) => {
  if (!root) {
    return [];
  }
  
  const q = [root];
  const res = [];
  
  while (q.length) {
    const qLength = q.length;
    const level = [];
    for (let i = 0; i < qLength; i++) {
      const node = q.shift();
      if (node) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (level.length) {
      res.push(level);
    }
  }
  
  return res;
}

