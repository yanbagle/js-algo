function Node (data) {
    this.data = data;
    this.neighbors = [];
}

function bfs (n) {

    if (!n) {
        return;
    }

    let queue = [];
    queue.push(n);

    while (queue.length !== 0) {
        const curr = queue.shift();
        console.log(curr.data);
        for (let neighbor of curr.neighbors) {
            queue.push(neighbor);
        }
    }
}