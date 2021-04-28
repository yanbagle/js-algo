function BinaryTree () {
  this.root = null;
}

BinaryTree.prototype.insert = function (data, left = null, right = null) {
  
  let Node = {
    data,
    left,
    right
  };
    
  if (this.root === null) {
    this.root = Node;
  } else {
    
    let currNode = this.root;
    
    while (currNode) {
      if (data < currNode.data) { // left
        if (currNode.left === null) {
          currNode.left = Node;
          break;
        } else {
          currNode = currNode.left;
        }
      } else { // right
        if (currNode.right === null) {
          currNode.right = Node;
          break;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }
  
  BinaryTree.prototype.inorder = function (node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  
};