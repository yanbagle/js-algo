function Graph (n) {
    this.graph = {};
    this.stack = [];
    this.visited = {};
}

Graph.prototype.addEdge = function (node, adj) {
  if (!this.graph[node]) {
    this.graph[node] = [];
  } 
  this.graph[node].push(adj);
}

Graph.prototype.topologicalSort = function () {
    for (let node in this.graph) {
        if (!this.visited[node]) {
            this.topologicalSortUtil(node);
        }
    }

    // pop from stack and print
    console.log(this.stack);
}

Graph.prototype.topologicalSortUtil = function (node) {

    this.visited[node] = true;

    if (this.graph[node]) {
      // iterate thru the node's adjacent nodes
      for (let adjNode of this.graph[node]) {
          if (!this.visited[adjNode]) { 
              this.topologicalSortUtil(adjNode);
          }
      }
    }

    this.stack.push(node);
}

let g = new Graph();
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
g.topologicalSort();
