function dfs (n) {

    if (!n) {
        return;
    }

    let stack = [];
    let visited = [];

    stack.push(n);

    while (stack.length) {
        const node = stack.pop();
        visited.push(node);
        node.neighbors.forEach((neighbor) => {
            stack.push(neighbor);
        });
    }
}