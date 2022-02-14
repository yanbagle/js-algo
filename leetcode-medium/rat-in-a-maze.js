/*

https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

*/

const ratInAMaze = (maze) => {
  
  const dfs = (r, c, path) => {

    if (r < 0 || c < 0 || r >= maze.length || c >= maze[0].length || maze[r][c] === 0 || path[r][c] === 1) {
      return;
    }
    
    path[r][c] = 1;
    
    dfs(r + 1, c, path);
    dfs(r - 1, c, path);
    dfs(r, c + 1, path);
    dfs(r, c - 1, path);
    
    path[r][c] = 0;
  }
  
  const sol = [];
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      sol[i][j] = 0;
    }
  }
  
  dfs(0, 0, sol);
  return sol;
}