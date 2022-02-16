/*

https://leetcode.com/problems/spiral-matrix/

*/

const spiralOrder = (matrix) => {
  const res = [];
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;
  
  while (left < right && top < bottom) {
    // left to right 
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
                                                                                      
    // top to bottom
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right--;
    
    // e.g. [1,2,3] or [[1],[2],[3]] 
    // checks for the same condition as the while loop above, it's possible we are already done
    if (!(left < right && top < bottom)) {
      break;
    }
    
    // right to left
    for (let i = right - 1; i > left - 1; i--) {
      res.push(matrix[bottom - 1][i]);
    }
    bottom--;
    
    // bottom to top
    for (let i = bottom - 1; i > top - 1; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  
  return res;
  
}





