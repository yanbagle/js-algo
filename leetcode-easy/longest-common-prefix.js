/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Input: strs = ["flower","flight","flow"]
Input: strs = ["flight","flower","flow"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

const longestCommonPrefix = (strArr) => {
  if (!strArr || strArr.length === 0) {
    return '';
  }
  
  // find shortest string
  let shortestStr = strArr[0];
  strArr.forEach((str) => {
    if (str.length < shortestStr.length) {
      shortestStr = str;
    }
  });
  
  let prefixCount;
  let longestCommonPrefixCount = shortestStr.length;
  strArr.forEach((str) => {
    prefixCount = 0;
    for (let i = 0; i < shortestStr.length; i++) {
      // iterate through until the characters don't match 
      if (str.charAt(i) === shortestStr.charAt(i)) {
        prefixCount++;
      } else if (prefixCount < longestCommonPrefixCount) {
        // replace the longestCommonPrefixCount with the current prefix count
        longestCommonPrefixCount = prefixCount;
      }
    }
  });
  
  return shortestStr.substring(0, longestCommonPrefixCount);
}




