/*

js array map

Array.prototype.map

*/

Array.prototype.myMap = function (func) {
  for (let i = 0; i < this.length; i++) {
    this[i] = func(this[i]);
  }
  return this;
}

const arr = [1, 4, 9, 16];
console.log(arr.myMap(x => x*2));