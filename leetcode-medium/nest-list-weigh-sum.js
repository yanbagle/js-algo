// https://leetcode.com/problems/nested-list-weight-sum/

const depthSum = (nestedList) => {
  return dfs(nestedList, 1);
}

const dfs = (list, depth) => {
  let sum = 0;
  
  for (let ele of list) {
    if (typeof ele === 'number') {
      sum += depth * ele;
    } else {
      sum += dfs(ele, depth + 1);
    }
  }
  
  return sum;
}

console.log(depthSum([[1,1],2,[1,1]]));