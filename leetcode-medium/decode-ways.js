/*

https://leetcode.com/problems/decode-ways/

*/

const numDecodings = (s) => {
  const dp = {
    [s.length] : 1
  };
  
  const dfs = (i) => {
    if (dp[i]) {
      return dp[i];
    }
    if (s.charAt(i) === '0') {
      return 0;
    }
    
    let res = dfs(i + 1);
    if (i + 1 < s.length && 
      (s.charAt(i) === '1' || s.charAt(i) === '2' && '0123456'.includes(s.charAt(i + 1)))) {
      res += dfs(i + 2);
    }
    dp[i] = res;
    return res;
  }
  
  return dfs(0);
}