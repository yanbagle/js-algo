/*

https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

*/

const x = [
  [1, 1],
  [0, 1],
];

// 0 is blocked
// 1 is a valid path
const ratInAMaze = (maze) => {
  const dfs = (r, c, path) => {
    if (r === maze.length - 1 && c === maze[0].length - 1 && maze[r][c] === 1) {
      // found our desination
      path[r][c] = 1;
      return true;
    }

    // if out of bounds OR it's 0 meaning it's blocked OR path is already visited
    if (
      r < 0 ||
      c < 0 ||
      r >= maze.length ||
      c >= maze[0].length ||
      maze[r][c] === 0 ||
      path[r][c] === 1
    ) {
      return false;
    }

    path[r][c] = 1;

    const res =
      dfs(r + 1, c, path) ||
      dfs(r - 1, c, path) ||
      dfs(r, c + 1, path) ||
      dfs(r, c - 1, path);

    path[r][c] = 0;

    return res;
  }; // end dfs function

  const res = Array(maze.length)
    .fill()
    .map(() => Array(maze[0].length).fill(0));

  if (dfs(0, 0, res)) {
    return res;
  }
};

ratInAMaze(x);
