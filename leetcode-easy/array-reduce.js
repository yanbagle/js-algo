/*

js array reduce

Array.prototype.reduce

**initialVal limited to a number value**

reducer args => accumulator, currentValue, index, array
*/

Array.prototype.myReduce = function (reducer, initialVal) {
  let acc = initialVal || 0;
  for (let i = 0; i < this.length; i++) {
    acc = reducer(acc, this[i], i, this);
  }
  return acc;
}