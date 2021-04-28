/*

Write a function that checks whether any permutation of a string is a palindrome.

*/

const palindromePermutation = (str) => {
  if (!str || typeof str !== 'string') {
    return false;
  }
  
  const charFreq = {};
  
  let oddCount = 0;
  for (const c of str) {
    if (charFreq[c]) {
      charFreq[c]++;
      if (charFreq[c] % 2 === 0) {
        oddCount--;
      }
    } else {
      charFreq[c] = 1;
      oddCount++;
    } 
  }
  
  return oddCount <= 1;
}