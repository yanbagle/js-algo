/*

Given an integer n, return any array containing n unique integers such that they add up to 0.

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Input: n = 3
Output: [-1,0,1]

Input: n = 1
Output: [0]

*/


const sumZero = (n) => {
  if (!n) {
    return [];
  }
  
  const arr = [];
  let j = 1;

  for (let i = 0; i < n / 2; i++) {
    if (i === Math.floor(n / 2) && n % 2 !== 0) { // at last element and n is odd
      arr.push(0);
    } else {
      arr.push(j);      
      arr.push(-j);
      j++; 
    }
  }
  
  return arr;
}

