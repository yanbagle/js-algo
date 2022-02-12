/*

https://leetcode.com/problems/minimum-window-substring/

*/

const minWindow = (s, t) => {
  if (!t.length) {
    return "";
  }
  
  const tCount = {};
  const slidingWindow = {};
  
  for (const c of t) {
    tCount[c] = tCount[c] ? tCount[c] + 1 : 1;
  }
  
  let have = 0;
  const need = Object.keys(tCount).length;
  
  let res = [-1,-1]; // keeps track of the l and r pointers 
  let resLen = Number.MAX_SAFE_INTEGER;

  let l = 0;
  let r = 0;
  
  while (r < s.length) {
    const c = s[r];
    slidingWindow[c] = slidingWindow[c] ? slidingWindow[c] + 1 : 1;
    
    if (tCount[c] && tCount[c] === slidingWindow[c]) { // if character exists in the t string 
      have++; // we're one count closer of having need and have to be the same  
    }
    
    while (have === need) { // we found a substring in s that contains the t string
      if (r - l + 1 < resLen) { // gotta update res and resLen if it's the new minimum substring
        res = [l, r];
        resLen = r - l + 1;
      }
      
      slidingWindow[s[l]]--; // decrement it because we're going to push L forward 
      if (tCount[s[l]] && slidingWindow[s[l]] < tCount[s[l]]) { 
        have--; // update have if the char count we decremented was actually in tCount 
      }
      l++;
    }
    r++; // moving onwards
  }
  
  return resLen !== Number.MAX_SAFE_INTEGER ? s.substring(res[0], res[1] + 1) : "";
}




