/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

*/

const numIslands = (island) => {
  if (!island || island.length === 0) {
    return 0;
  }
  
  let count = 0;
  for (let i = 0; i < island.length; i++) {
    for (let j = 0; j < island[0].length; j++) {
      if (island[i][j] === '1') {
        count++;
        dfs(island, i, j);
      }
    }
  }
  
  return count;
}

const dfs = (island, i, j) => {
  const m = island.length;
  const n = island[0].length;
  
  if (i < 0 || i >= m || j < 0 || j >= n || island[i][j] !== '1') {
    return;
  }
  island[i][j] = 'x';
  
  dfs(island, i+1, j);
  dfs(island, i, j+1);
  dfs(island, i-1, j);
  dfs(island, i, j-1);
}