/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

const climbStairs2 = (n) => {
  if (n === null || typeof n !== 'number') {
    return 0;
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }
  
  const ways = [0, 1];
  
  for (let i = 2; i <= n + 1; i++) {
    ways[i] = ways[i-2] + ways[i-1];
  }
  
  return ways[ways.length - 1];
}

const climbStairs = (n) => {
  let one = 1;
  let two = 1;
  let temp;
  
  for (let i = 1; i < n; i++) {
    temp = one;
    one += two;
    two = temp;
  }
  
  return one;
}











