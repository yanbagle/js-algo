// Coderpad: Given a function that takes in x and y, have the method print out a multiplication table of x columns and y rows.

const multiplicationTable = (x,y) => {
  
  const res = [];
  
  for (let i = 0; i <= x; i++) {
    res[i] = [];
    for (let j = 0; j <= y; j++) {
      res[i][j] = i*j;
    }
  }
  
  return res;
}