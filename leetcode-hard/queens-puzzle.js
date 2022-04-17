/*

https://leetcode.com/problems/n-queens/

*/

const solveNQueens = (n) => {
  
  const res = [];
  const board = [];
  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = '.';
    }
  }
  
  const posDia = {}; // r + c
  const negDia = {}; // r - c
  const col = {};
  
  const backtrack = (r) => {
    if (r === n) {
      // format into output
      const index = res.length;
      res[index] = [];
      for (let i = 0; i < board.length; i++) {
        let str = '';
        for (let j = 0; j < board[0].length; j++) {
          str += board[i][j];
        }
        res[index].push(str);
      }
    }
    

    for (let c = 0; c < n; c++) {
      
      const rc = r + c;
      const rc2 = r - c;
      
      if (col[c] || posDia[''+rc] || negDia[''+rc2]) {
        continue;
      }
      
      board[r][c] = 'Q';
      posDia[rc] = true;
      negDia[rc2] = true;
      col[c] = true;
      
      backtrack(r+1);
      
      board[r][c] = '.';
      posDia[rc] = false;
      negDia[rc2] = false;
      col[c] = false;
    }

    
  }
  
  backtrack(0);
  return res;
}




