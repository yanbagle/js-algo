/*

https://leetcode.com/problems/set-matrix-zeroes/

*/

const setZeroes = (matrix) => {
  const row = [];
  const col = [];
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        row[r] = true;
        col[c] = true;
      }
    }
  }
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (row[r] || col[c]) {
        matrix[r][c] = 0;
      }
    }
  }
  
  return matrix;
}