/*

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

*/

const countSubstrings = (s) => {
  let count = 0;
  let l;
  let r;
  
  for (let i = 0; i < s.length; i++) {
    // odd case
    l = i;
    r = i;
    count = palidromeCheck(l, r, s, count);
    
    // even case
    l = i;
    r = i + 1;  
    count = palidromeCheck(l, r, s, count);
  }
  
  return count;
}

const palidromeCheck = (l, r, s, count) => {
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    count++;
    l--;
    r++;
  }
  return count;
}












