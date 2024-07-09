// Your task is to create a representation of a spreadsheet:
// - a spreadsheet should have a fixed number of columns (specified as string-names at creation)
// - a spreadsheet should have infinitely many rows (numbered, starting at 0)
// - each cell contains a number, defaulting to 0
// - you should be able to:
//   - set the value of a cell
//   - get the value of a cell
//   - print out the first N rows of the spreadsheet (don’t worry too much about making this pretty)

// Please add the capability to set a cell to a formula referencing other cells. An example formula might be stated as "column A, row 1 plus column B, row 2". You can assume that a simple "plus" is the only operation we need to support and that the row and column of the two referenced cells are each passed as separate arguments.

class Spreadsheet {
  constructor(columns) {
    this.table = {};
    for (let c of columns) {
      this.table[c] = {};
    }
    // {fips: {}, pop: {}, area: {}}
  }
  set(row, column, value) {
    if (!this.table[column] || row < 0) {
      return null;
      // throw error
    }
    // {fips: {0: {[1,"fips", 2 "pop"], 1: value, 2: value}} adding row 0
    this.table[column][row] = value;
    return value;
  }
  get(row, column) {
    // add a visited set
    if (!this.table[column] || !this.table[column][row]) {
      return 0;
    }
    if (isArray(this.table[column][row])) {
      const cells = this.table[column][row];
      const c1 = this.get(cells[1], cells[0]);
      const c2 = this.get(cells[1], cells[0]);
      return c1 + c2;
    } else {
      return this.table[column][row];
    }
  }
  printFirstN(n) {
    let row = 0;
    let str = "";
    while (row <= n) {
      for (let c in this.table) {
        if (this.table[c][row]) {
          str += this.table[c][row] + " , ";
        } else {
          str += "0 , ";
        }
      }
      console.log(str);
      str = "";
      row++;
    }
  }
}

let my_spreadsheet = new Spreadsheet(["fips", "pop", "area"]);
my_spreadsheet.set(0, "fips", 1001);
my_spreadsheet.set(0, "pop", 200000);
my_spreadsheet.set(0, "area", 5000);
my_spreadsheet.set(5, "fips", 1002);
my_spreadsheet.set(-1, "fips", 1002);
console.log(my_spreadsheet.set(-1, "fips", 1002));

// console.log(my_spreadsheet.get(0, "fips")); // 1001
// console.log(my_spreadsheet.get(0, "area")); // 5000
// console.log(my_spreadsheet.get(1, "fips")); // 0
// console.log(my_spreadsheet.get(1, "area")); // 0
// console.log(my_spreadsheet.get(5, "fips")); // 1002
// console.log(my_spreadsheet.get(5, "area")); // 0
// my_spreadsheet.printFirstN(10);
