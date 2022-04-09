/*

https://leetcode.com/problems/merge-two-binary-trees/

* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

*/

const mergeTrees = (root1, root2) => {
  if (!root1 && !root2) {
    return null;
  }
  
  const v1 = root1 ? root1.val : 0;
  const v2 = root2 ? root2.val : 0;
  const root = new TreeNode(v1 + v2);
  
  const left1 = root1 ? root1.left : null;
  const right1 = root1 ? root.right : null;
  
  const left2 = root2 ? root2.left : null;
  const right2 = root2 ? root2.right : null;
  
  root.left = mergeTrees(left1, left2);
  root.right = mergeTrees(right1, right2);
  
  return root;
}