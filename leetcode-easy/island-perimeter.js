/*

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

https://leetcode.com/problems/island-perimeter/

*/

const islandPerimeter = (grid) => {
  if (!grid || !grid.length) {
    return 0;
  }
  
  let perimeter = 0;
  let left;
  let right; 
  let top;
  let bottom;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // check all directions
        left = i - 1 >= 0 ? grid[i-1][j] : undefined;
        right = i + 1 <= grid.length - 1 ? grid[i+1][j] : undefined;
        top = j + 1 >= 0 ? grid[i][j+1] : undefined;
        bottom = j - 1 <= grid[i].length - 1 ? grid[i][j-1] : undefined;
        if (left === undefined || left === 0) {
          perimeter++;
        }
        if (right === undefined || right === 0) {
          perimeter++;
        }
        if (top === undefined || top === 0) {
          perimeter++;
        }
        if (bottom === undefined || bottom === 0) {
          perimeter++;
        }
      }
    }
  }
  
  return perimeter;
  
}


