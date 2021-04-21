/*
  
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true

*/

const isIsomorphicString = (s, t) => {
  if (!s || !t || typeof s !== 'string' || typeof t !== 'string' || s.length !== t.length) {
    return false;
  }
  
  const m1 = {};
  const m2 = {};
  let c1;
  let c2;
  
  for (let i = 0; i < s.length; i++) {
    c1 = s.charAt(i);
    c2 = t.charAt(i);
    if (m1[c1]) {
      if (c2 !== m1[c1]) {
        return false;
      }
    } else {
      if (m2[c2]) {
        return false;
      }
      m1[c1] = c2;
      m2[c2] = c1;
    }
  }
  
  return true;
}