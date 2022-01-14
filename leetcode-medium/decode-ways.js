/*

https://leetcode.com/problems/decode-ways/

*/

const numDecodings = (s) => {
  const dp = {
    [s.length] : 1 // base ways
  };
  
  const dfs = (i) => {
    if (dp[i]) { // if already exists, return the previous result
      return dp[i];
    }
    if (s.charAt(i) === '0') { // 0 is not a valid encoding character 
      return 0;
    }
    
    let res = dfs(i + 1); // go until we've reached the end 
    
    // check to see if we can do 2 number decoding
    if (i + 1 < s.length && 
      (s.charAt(i) === '1' || s.charAt(i) === '2' && '0123456'.includes(s.charAt(i + 1)))) {
      res += dfs(i + 2);
    }
    
    dp[i] = res;
    return res;
  }
  
  return dfs(0);
}