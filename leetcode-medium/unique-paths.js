/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

https://leetcode.com/problems/unique-paths/

*/

// dfs, brute force
const uniquePaths = (m, n) => {
  const ways = {count: 0};
  dfs(0, 0, ways, m, n);
  return ways.count;
}

const dfs = (i, j, ways, m, n) => {
  if (i >= m || j >= n) {
    return;
  }
  else if (i === m - 1 && j === n - 1) {
    ways.count++;
  } else {
    dfs(i+1, j, ways, m, n);
    dfs(i, j+1, ways, m, n);
  }
}

// dp solution 
const uniquePaths2 = (m, n) => {
  let row = Array(n).fill(1); // initial bottom row is all 1 because all bottom rows have 1 way to reach the end
  let newRow;
  
  for (let i = 0; i < m - 1; i++) { // bottom row is already calculated, so skipping
    newRow = Array(n).fill(1); // fill it out with 1's initially
    for (let j = n - 2; j >= 0; j--) { // skipping last column element because it will always be a 1
      newRow[j] = newRow[j+1] + row[j]; // adding the right ways and the bottom ways to get newRow[j]
    }
    row = newRow;
  }
  
  return row[0]; 
}


































