/*

Count the number of prime numbers less than a non-negative number, n.

*/

const countPrime = (n) => {
  if (n === null) {
    return null;
  }
  
  if (n === 0 || n === 1 || n === 2) {
    return 0;
  }
  
  let count = 0;
  
  for (let i = 3; i < n - 1; i++) {
    if (isPrime(i)) {
      count++;
    }
  }  
  
  return count;
}

const isPrime = (n) => {
  if (n !== 2 && n % 2 === 0) { // if even 
    return false;
  }
  
  for (let i = 3; i < n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}