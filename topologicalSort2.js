function Graph (depLists) {
    this.graph = {};

    for (let dep of depLists) {
        this.addEdge(dep[0], dep[1]);
    }

    console.log(this.graph);
}

Graph.prototype.addEdge = function (node, adj) {
    if (!this.graph[node]) {
        this.graph[node] = [];
    }
    this.graph[node].push(adj);
};

Graph.prototype.topologicalSort = function () {

    this.stack = [];
    this.visited = {};

    for (let node in this.graph) {
        if (!this.visited[node]) {
            this.topologicalSortUtil(node);
        }
    }
};

Graph.prototype.topologicalSortUtil = function (node) {

    this.visited[node] = true;

    if (this.graph[node]) {
        for (let dep of this.graph[node]) {
            if (!this.visited[dep]) {
                this.topologicalSortUtil(dep);
            }
        }
    }

    this.stack.push(node);
};

const depLists = [['c','b'],['m','binary'],['b','l'],['l','binary'],['c','m'],['b','r']];
// const depLists = [['c','b'],['b','c']];
let graph = new Graph(depLists);
graph.topologicalSort();

console.log(graph.stack);