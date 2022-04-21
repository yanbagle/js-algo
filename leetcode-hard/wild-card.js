// https://leetcode.com/problems/wildcard-matching/

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
