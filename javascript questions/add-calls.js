function add (x) {
  let total = x || 0;
  function inner(y) {
    if (y) {
      total += y;
      return inner;
    } else {
      return total;
    } 
  }
  return inner;
}