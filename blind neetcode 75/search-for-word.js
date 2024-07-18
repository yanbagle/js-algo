const exist = (board, word) => {
  const visited = {}; // so the dfs search doesn't go backwards and revisit the chars we already looked at and counted
  const dfs = (row, col, currIndex) => {
    if (currIndex === word.length) {
      // reached the end
      return true;
    }
    const rowCol = row + "-" + col;
    if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      board[row][col] !== word[currIndex] ||
      visited[rowCol]
    ) {
      return false;
    }

    visited[rowCol] = true;

    const res =
      dfs(row + 1, col, currIndex + 1) ||
      dfs(row - 1, col, currIndex + 1) ||
      dfs(row, col + 1, currIndex + 1) ||
      dfs(row, col - 1, currIndex + 1);

    visited[rowCol] = false; // erase visited set so we can have a fresh start at the next char iteration in the nested loop

    return res;
  };

  let found = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        found = dfs(i, j, 0);
        if (found) {
          return true;
        }
      }
    }
  }
  return false;
};
