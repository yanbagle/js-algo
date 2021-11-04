/*

Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"

Input: s = "a"
Output: "a"

Input: s = "ac"
Output: "a"

*/

const longestPalindrome = (s) => {
  if (!s || !s.length) {
    return "";
  }
  
  let maxLength = 0;
  let maxResult = "";
  let r;
  let l;
  
  for (let i = 0; i < s.length; i++) {
    // odd case 
    r = i;
    l = i;  
    maxResult = palindromeCheck(r, l, s, maxResult, maxResult.length);
    
    // even case
    l = i;
    r = i + 1;
    maxResult = palindromeCheck(r, l, s, maxResult, maxResult.length);
  }
  
  return maxResult;
}

const palindromeCheck = (r, l, string, maxResult, maxLength) => {
  while (r < string.length && l >= 0 && string.charAt(l) === string.charAt(r)) {
    if (r - l + 1 > maxLength) {
      maxLength = r - l + 1;
      maxResult = string.substring(l, r + 1);
    }
    r++;
    l--;
  }
  return maxResult;
}






















