function lca (root, n1, n2) {
    if (!root) {
        return null;
    }
    if (root === n1 || root === n2) {
        return root;
    }

    let left = lca(root.left, n1, n2);
    let right = lca(root.right, n1, n2);

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left: right;
}