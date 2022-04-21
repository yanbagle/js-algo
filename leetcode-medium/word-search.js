/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

https://leetcode.com/problems/word-search/

*/

const exist = (board, word) => {
  
  const path = {}; // r,c as key; visited list
  
  const dfs = (r, c, i) => { // i is the index of the current character in word
    
    // made it all the way to the end
    if (i === word.length){ 
      return true;
    }
    
    const rowCol = r + ',' + c;
    
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || 
      board[r][c] !== word.charAt(i) || path[rowCol]) { // if out of bounds OR board[r][c] !== word.charAt(i) OR visited
      return false;
    }
    
    path[rowCol] = true;
    
    const res = 
      dfs(r+1, c, i + 1) ||
      dfs(r-1, c, i + 1) ||
      dfs(r, c+1, i + 1) ||
      dfs(r, c-1, i + 1);
      
    path[rowCol] = false;

    return res;
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}