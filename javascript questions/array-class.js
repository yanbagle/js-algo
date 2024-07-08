class MyArray {
  constructor(colSize) {
    this.array = [];
    for (let i = 0; i < colSize; i++) {
      this.array[i] = [];
      for (let j = 0; j < colSize; j++) {
        this.array[i][j] = undefined;
      }
    }
  }

  get(row, col) {
    if (!this.array[row][col]) {
      return null;
    }
    return this.array[row][col];
  }

  set(row, col, val) {
    if (row >= colSize || row < 0 || col >= colSize || col < 0) {
      // throw error
      return;
    }
    this.array[row][col] = val;
  }

  print(n) {
    const len = this.array.length;
    if (n < 0 || n >= len) {
      return;
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < len; j++) {
        console.log(this.array[i][j]);
      }
    }
  }
}
