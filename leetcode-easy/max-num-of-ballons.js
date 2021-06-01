/*

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Input: text = "nlaebolko"
Output: 1

Input: text = "loonbalxballpoon"
Output: 2

Input: text = "leetcode"
Output: 0

*/

const maxNumberOfBallons = (str) => {
  if (!str || !str.length) {
    return 0;
  }
  
  const word = 'ballon';
  const charFreq = {};
  for (const c of word) {
    charFreq[c] = 0;
  }
    
  for (const c of str) {
    if (charFreq[c] >= 0) {
      charFreq[c]++;
    }
  }
  
  let countGreaterThanZero = true;
  let wordCount = 0;
  while (countGreaterThanZero) {
    for (const c of word) {
      charFreq[c]--;
      if (charFreq[c] < 0) {
        countGreaterThanZero = false;
      }
    }
    if (countGreaterThanZero) {
      wordCount++;
    }
  }
  
  return wordCount;
}








