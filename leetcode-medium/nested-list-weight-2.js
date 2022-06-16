// https://leetcode.com/problems/nested-list-weight-sum-ii/discuss/2144702/Java-DFS-Solution-2-Passes
// similar to nested list weight 1, only difference we need to calculate the max depth beforehand

var depthSumInverse = function(nestedList) {
  const maxDepth = getMaxDepth(nestedList, 1);
  return dfs(nestedList, 1, maxDepth);
}

const dfs = (list, depth, maxDepth) => {
  const sum = 0;
  const weight = maxDepth - depth + 1;
  
  for (let ele of list) {
    if (typeof ele === 'number') {
      sum += weight * ele;
    } else {
      sum += dfs(list, depth + 1, maxDepth);
    }
  }
  
  return sum;
}

const getMaxDepth = (list, depth) => {
  let maxDepth = 1;
  
  for (let ele of list) {
    if (typeof ele === 'number') {
      maxDepth = Math.max(maxDepth, depth);
    } else {
      maxDepth = Math.max(maxDepth, getMaxDepth(ele, depth + 1));
    }
  }
  
  return maxDepth;
}