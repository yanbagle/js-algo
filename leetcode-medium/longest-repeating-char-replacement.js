/*

https://leetcode.com/problems/longest-repeating-character-replacement/

*/

const characterReplacement = (s, k) => {
  let res = 0;
  const countTable = {};
  
  let l = 0;
  let r = 0;
  
  while (r < s.length) {
    const c = s.charAt(r);
    countTable[c] = countTable[c] ? countTable[c] + 1 : 1;
    
    const windowLength = r - l + 1;
    if (windowLength - Math.max(...Object.values(countTable)) > k) {
      countTable[s.charAt(l)] = countTable[s.charAt(l)] - 1;
      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }  
  
  return res;
  
}