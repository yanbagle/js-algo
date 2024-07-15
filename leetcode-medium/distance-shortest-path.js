/* 

We have a m x n 2D grid initialized with three possible values:
-1 - An obstacle.
0 - An exit.
INF - An empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to an exit is less than 2147483647.

We want to fill each empty room with the distance to its nearest exit. If it is impossible to reach an exit, it should be filled with INF.

Example:
Given the 2D grid:

INF -1 0 INF
INF INF INF -1
INF -1 INF -1
0 -1 INF INF

We expect the output 2D grid as:

3 -1 0 1
2 2 1 -1
1 -1 2 -1
0 -1 3 4

*/

const shortestPathToExit = (grid) => {
  if (!grid || !grid.length) {
    return;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        // we start the traversal from an exit
        dfs(grid, i, j, 0);
      }
    }
  }
};

const dfs = (grid, i, j, distance) => {
  if (
    i < 0 || // if out of bounds
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    (grid[i][j] === 0 && distance > 1) // if we have found another exit after coming from an exit
  ) {
    return;
  }

  grid[i][j] = Math.min(grid[i][j], distance);
  dfs(grid, i + 1, j, distance + 1);
  dfs(grid, i - 1, j, distance + 1);
  dfs(grid, i, j + 1, distance + 1);
  dfs(grid, i, j - 1, distance + 1);
};
