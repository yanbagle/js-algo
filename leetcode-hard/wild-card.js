/*

https://leetcode.com/problems/wildcard-matching/

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

*/

const isMatch = (s, p) => {
  let sLen = s.length;
  let pLen = p.length;

  let sPointer = 0;
  let pPointer = 0;
  
  let lastMatched = -1; // last matched character in s string after encountering a '*' character
  let star = -1; // purely keeps track of '*' character index in the p string
  
   while (sPointer < sLen) {
     
      // if characters match or it's a '?' so it can be anything, then we advance both s and p pointers 
      if (pPointer < pLen && (p.charAt(pPointer) === s.charAt(sPointer) || p.charAt(pPointer) === '?')) {
         sPointer += 1;
         pPointer += 1;
      }
      
      // if '*' then we set lastMatched and star to current pPointer 
      else if (pPointer < pLen && p.charAt(pPointer) === '*' ) {
         lastMatched = sPointer;
         star = pPointer;
         pPointer += 1;     
      }
      
      /* 
      
      if star is NOT the initial value which means a '*' has been found
    
      this makes sense if you think about how if we encountred a '*' previously 
      then we are going to move lastMatched (which tracks the s string) forward along with sPointer 
      and setting pPointer to the last star index found + 1 because we want the pPointer to be where star was previously 
      
      */
      else if ( star !== -1 ) { 
         lastMatched += 1; // lastMatched tracks the s string
         sPointer = lastMatched; // move sPointer forward as well 
         pPointer = star + 1; // set pPointer to the previous star index + 1
      }
      
      else {
       return false;
      }   
  }
  
  while (pPointer < pLen && p.charAt(pPointer) === '*' ) {
     pPointer += 1;
  }
  
  return pPointer === pLen; 
}
