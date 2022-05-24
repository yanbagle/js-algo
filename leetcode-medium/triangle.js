const triangle = (w) => {
  
  const halfPoint = Math.ceil(w / 2);
  let l = halfPoint;
  let r = halfPoint;
  let row = 0;
  let res = [];
  
  while (l > 0 && r < w) {
    res[row] = [];
    res[row][l] = 'x';
    res[row][r] = 'x';
    row++;
    l--;
    r++;
  }
  
  return res;
}