class TopologicalSort {
  constructor() {
    this.depGraph = {};
    this.visited = {};
    this.res = [];
  }

  // e.g. depArr = [[A,B], [B, C], [A,D] ...]
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

  topologicalSort() {
    for (let ele in this.depGraph) {
      if (!this.visited[ele]) {
        this.topologicalSortUtil(ele);
      }
    }
    return this.res;
  }

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
