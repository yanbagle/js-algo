const rotate = (matrix) => {
  if (!matrix || !matrix.length) {
    return [];
  }
  const n = matrix.length;

  /*
     first transpose the matrix; converting rows into columns
     1, 4, 7,
     2, 5, 8,
     3, 6, 9 
  */
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  /*
     flip matrix horizontally
     7, 4, 1,
     8, 5, 2,
     9, 6, 3,
  */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
  return matrix;
};
