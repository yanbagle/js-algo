class TopologicalSort {
  constructor() {
    this.depGraph = {};
    this.visited = {};
    this.res = [];
  }

  // e.g. input = [[A,B], [B, C], [A,D] ...]
  // convert arr to dep table {A: [B, D], B: [C], etc}
  // key = node, value = list of deps
  buildDepGraph(depArr) {
    for (let dep of depArr) {
      const a = dep[0];
      const b = dep[1];
      if (!this.depGraph[a]) {
        this.depGraph[a] = [];
      }
      this.depGraph[a].push(b);
    }
  }

  // loop thru every node in graph
  topologicalSort() {
    for (let ele in this.depGraph) {
      if (!this.visited[ele]) {
        this.topologicalSortUtil(ele);
      }
    }
    return this.res;
  }

  // for every node in graph, we loop thru its deps until we get to a node that has no deps
  // the node with no deps will be the first node added to res []
  // recursion will take us back to all the nodes and add them to the res []
  topologicalSortUtil(node) {
    this.visited[node] = true;

    if (this.depGraph[node]) {
      for (let dep of this.depGraph[node]) {
        if (!this.visited[dep]) {
          this.topologicalSortUtil(dep);
        }
      }
    }
    this.res.push(node);
  }
}
