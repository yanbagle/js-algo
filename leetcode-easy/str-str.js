/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. 

This is consistent to C's strstr() and Java's indexOf().

*/

const strStr = (haystack , needle) => {
  if (!haystack || !needle || needle.length === 0 || needle.length > haystack.length) {
    return -1;
  }
  
  let haystackIndex;
  let needleIndex;
  for (let i = 0; i < haystack.length; i++) {
    haystackIndex = i;
    needleIndex = 0;
    while (haystack.charAt(haystackIndex) === needle.charAt(needleIndex) && haystackIndex < haystack.length) {
      haystackIndex++;
      needleIndex++;
      if (needleIndex === needle.length) {
        return i;
      }
    }
  }
  
  return -1;
}