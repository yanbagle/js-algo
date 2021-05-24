/*
You are given a string s. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Input: s = "azxxzy"
Output: "ay"

*/

const removeAdjacentDups = (str) => {
  if (!str || str.length === 0) {
    return null;
  }
  
  let hasRemovedDups = true;
  
  while (hasRemovedDups) {
    hasRemovedDups = false;
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charAt(i) === str.charAt(i+1)) {
        str = str.slice(0,i) + str.slice(i+1);
        str = str.slice(0,i) + str.slice(i+1);
        hasRemovedDups = true;
      }
    }
  }
  
  return str;
}