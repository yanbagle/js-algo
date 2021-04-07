/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

const isPalindromeNumber = (number) => {
  if (!number || number < 0) {
    return false;
  }
  
  const str = number.toString();
  
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}