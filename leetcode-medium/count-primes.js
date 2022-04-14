/*

https://leetcode.com/problems/count-primes/

*/

const countPrimes = (n) => {
  if (n <= 2) {
    return 0;
  }
  
  let count = 1;
  
  for (let i = 3; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  
  return count;
}

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}