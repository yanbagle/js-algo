/*

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]

*/

const pacificAtlantic = (heights) => {

  const pacific = {};
  const atlantic = {};
  const rows = heights.length;
  const cols = heights[0].length;
  
  // top/bottom row, pacific/atlantic ocean 
  for (let c = 0; c < cols; r++) {
    dfs(0, c, pacific, heights[0][c]);
    dfs(rows - 1, c, heights[rows-1][c]);
  }  
  
  // left/right col, pacific/atlantic ocean 
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights[r][0]);
    dfs(r, cols - 1, heights[r][cols-1]);
  }  
  
  const res = [];
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rc = r + '-' + c;
      if (atlantic[rc] && pacific[rc]) {
        res.push([r,c]);
      }
    }
  }
    
  return res;
  
  
  const dfs = (r, c, visited, prevHeight) => {
    const rc = r + '-' + c;
    
    if (r < 0 || c < 0 || r >= rows || c >= cols || visited[rc] || prevHeight > heights[r][c]) {
      return; 
    }
    
    visited[rc] = true;
    
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }
  
}



/*******************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************/

const pacificAtlantic = (heights) => {
  const atlantic = {};
  const pacific = {};
  
  const row = heights.length;
  const col = heights[0].length;
  
  for (let c = 0; c < col; c++) { // first and bottom row, pacific and atlantic ocean
    dfs(0, c, pacific, heights[0][c], heights); // pacific
    dfs(row - 1, c, atlantic, heights[row - 1][c], heights); // atlantic
  }
  
  for (let r = 0; r < row; r++) { // first and last col, pacific and atlantic ocean
    dfs(r, 0, pacific, heights[r][0], heights); // pacific
    dfs(r, col - 1, atlantic, heights[r][col - 1], heights); // atlantic
  }
  
  const res = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const rowCol = i + ' , ' + j;
      if (pacific[rowCol] && atlantic[rowCol]) {
        res.push([i,j]);
      }
    }
  }
  
  return res;
}

const dfs = (r, c, visited, prevHeight, heights) => {
  const rowCol = r + ' , ' + c;
  
  if (!visited[rowCol] || r < 0 || c < 0 || r > heights.length - 1 || c > heights[0].length - 1 
    || heights[r][c] < prevHeight) {
    return;
  }
  
  visited[rowCol] = true;
  dfs(r + 1, c, visited, heights[r][c], heights);
  dfs(r - 1, c, visited, heights[r][c], heights);
  dfs(r, c + 1, visited, heights[r][c], heights);
  dfs(r, c - 1, visited, heights[r][c], heights);
  
}

/*******************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************/

const pacificAtlantic = (heights) => {
  if (!heights || !heights.length) {
    return [];
  }
  
  const row = heights.length;
  const col = heights[0].length;
  
  // r , c as key
  // our visited set 
  const pacific = {};
  const atlantic = {};
  
  // go through 1st and last row (pacific and atlantic ocean)
  for (let c = 0; c < col; c++) {
    dfs(0, c, pacific, heights[0][c], heights);
    dfs(row - 1, c, atlantic, heights[row - 1][c], heights);
  }
  
  // go through 1st and last col (pacific and atlantic ocean)
  for (let r = 0; r < row; r++) {
    dfs(r, 0, pacific, heights[r][0], heights);
    dfs(r, col - 1, atlantic, heights[r][col - 1] , heights);
  }
  
  const res = []; // stores all the r, c coordinates that are in both pac and atl visit sets
  let node;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      node = r + ',' + c;
      if (pacific[node] && atlantic[node]) {
        res.push([r, c]);
      }
    }
  }
  
  return res;
}

const dfs = (r, c, visit, prevHeight, heights) => {
  const row = heights.length;
  const col = heights[0].length;
  
  const node = r + ',' + c;
  if (visit[node] || r > row - 1 || r < 0 || c > col - 1 || c < 0 || heights[r][c] < prevHeight) {
    return;
  }
  
  visit[node] = true;
  dfs(r + 1,c, visit, heights[r][c], heights);
  dfs(r - 1,c, visit, heights[r][c], heights);
  dfs(r,c + 1, visit, heights[r][c], heights);
  dfs(r,c - 1, visit, heights[r][c], heights);
}



































