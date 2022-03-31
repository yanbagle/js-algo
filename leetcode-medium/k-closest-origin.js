/*

https://leetcode.com/problems/k-closest-points-to-origin/

*/

const kClosest = (points, k) => {
  const dist = [];
  for (let p of points) {
    const x = p[0];
    const y = p[1];
    const distance = (x * x) + (y * y);
    dist.push([distance, x, y]);
  }
  
  dist.sort((a, b) => {
    return a[0] - b[0];
  });
  
  const res = [];
  while (k) {
    const point = dist.shift();
    k--;
    res.push([point[1], point[2]]);
  }
  
  return res;
}