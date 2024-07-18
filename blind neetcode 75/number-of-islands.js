const numIslands = (grid) => {
  const dfs = (row, col, visited) => {
    const rowCol = row + "-" + col;
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "0" ||
      visited[rowCol]
    ) {
      return;
    }

    visited[rowCol] = true;

    dfs(row + 1, col, visited);
    dfs(row - 1, col, visited);
    dfs(row, col + 1, visited);
    dfs(row, col - 1, visited);
  };

  let islandCount = 0;
  const visited = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited[i + "-" + j]) {
        islandCount++;
        dfs(i, j, visited);
      }
    }
  }
  return islandCount;
};
