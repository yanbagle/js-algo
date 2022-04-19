/*

  https://www.geeksforgeeks.org/binary-tree-string-brackets/

  Input : Preorder: [1, 2, 3, 4]
         1
       /   \
      2     3
     /    
    4     
    
  Output: "1(2(4))(3)"

  class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }

*/

const treeToString = (root) => {
  let str = '';
  
  const helper = (root) => {
    if (!root) {
      return;
    }
    
    str += root.data;
    
    // if leaf node
    if (!root.left && !root.right) {
      return;
    }
    
    str += '(';
    helper(root.left);
    str += ')';
    
    if (root.right) {
      str += '(';
      helper(root.right);
      str += ')';
    }

  }
  
  return str;

}














