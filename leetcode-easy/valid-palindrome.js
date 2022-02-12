/*

https://leetcode.com/problems/valid-palindrome/

*/

const isPalindrome = (s) => {
  
  let str = '';
  for (const c of s) {
    if (c.match(/^[a-z0-9]+$/i)) {
      str += c;
    }
  }
  
  let l = 0;
  let r = str.length - 1;
  
  while (l <= r) {
    if (str.charAt(l).toUpperCase() !== str.charAt(r).toUpperCase()) {
      return false;
    }
    l++;
    r--;
  }
  
  return true;
  
}