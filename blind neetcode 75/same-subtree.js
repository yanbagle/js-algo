// similar to same tree problem

const isSubtree = (root, subRoot) => {
  if (!subRoot) {
    return true; // null is a valid subroot of root
  }
  if (!root) {
    // if subroot is NOT null but root is, then subroot is NOT a subtree of root
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  // if all checks above fail, then traverse through root left and right and recursively run the function again
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }
  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};
