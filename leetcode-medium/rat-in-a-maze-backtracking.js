/*

https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

*/

const ratMaze = (maze) => {
  if (!maze || !maze.length) {
    return null;
  }
  
  const solution = [];  
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0;
    }
  }
  
  return findPath(maze, 0, 0, solution) ? solution : null;
}

const isSafe = (maze, x, y) => {
  const n = maze.length;
  if (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 0) {
    return true;
  }
  return false;
}

const findPath = (maze, x, y, solution) => {
  
  if (x === maze.length - 1 && y === maze[0].length - 1) { // arrived at destination
    return true;
  }
  
  if (isSafe(maze, x, y)) {
    
    if (solution[x][y] === 1) {
      return false;
    }
    
    solution[x][y] = 1;
    
    if (findPath(maze, x + 1, y, solution)) {
      return true;
    }
    if (findPath(maze, x, y + 1, solution)) {
      return true;
    }
    if (findPath(maze, x - 1, y, solution)) {
      return true;
    }
    if (findPath(maze, x, y - 1, solution)) {
      return true;
    }
    
    solution[x][y] = 0;
    return false;
  }
  return false;  
}












