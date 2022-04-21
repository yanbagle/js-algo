// https://leetcode.com/problems/wildcard-matching/

/*

#   Using the DFS to solve this problem 
#   We have a string s abcd and pattern p a*c
#   Each time we iterate s and p with pointer i and j when s[i] == p[j]
#   if p[j] is star * which means p[j] can match a string here including empty string
#   Therefore, first we assuming p[j] match empty then we keep moving two pointers until we cannot have matched part
#   Then we came back to make let p[j] match s[i] so we keep moving two pointers from i+1 and j
#   Repeat above steps until there is no more possible matches 
#   we return false

*/
const isMatch = (s, p) => {
  let n = s.length;
  let m = p.length;
  let lastMatched = -1;
  let star = -1;
  let i = 0;
  let j = 0;
  
   while (i < n) {
       if (j < m && (p.charAt(j) === s.charAt(i) || p.charAt(j) === '?')) {
           i += 1;
           j += 1;
       }
       else if (j < m && p.charAt(j) === '*' ) {
           lastMatched = i;
           star = j;
           j += 1;     
       }
       else if ( star !== -1 ) {
           i = lastMatched + 1;
           lastMatched = i;
           j = star + 1;
       }
       else {
         return false;
       }
           
  }
  
  while (j < m && p.charAt(j) === '*' ) {
     j += 1;
  }
  
  return j === m; 
}
