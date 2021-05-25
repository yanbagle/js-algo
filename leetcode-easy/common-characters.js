/*

Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Input: ["cool","lock","cook"]
Output: ["c","o"]

*/

const getCommonChars = (strArr) => {
  if (!strArr || strArr.length === 0) {
    return [];
  }
  
  const charTable = [];
  
  strArr.forEach((str, index) => {
    charTable[index] = {};
    for (const char of str) {
      charTable[index][char] = charTable[index][char] ? charTable[index][char] + 1 : 1; 
    }
  });
  
  const commonChars = [];
  let charIsFound = true;
  let tableIndex = 1;
  let charCount = Number.MAX_SAFE_INTEGER;
  
  for (const char in charTable[0]) {
    while (charIsFound && tableIndex < charTable.length) {
      charIsFound = charTable[tableIndex][char] ? true : false;
      charCount = Math.min(charCount, charTable[tableIndex][char]);
      tableIndex++;
    }
    if (charIsFound && tableIndex === charTable.length) { // character is present in all strings
      while (charCount > 0) {
        commonChars.push(char);
        charCount--;  
      }
    } 
    charIsFound = true;
    tableIndex = 1;
    charCount = Number.MAX_SAFE_INTEGER;
  }
  
  
  return commonChars;
  
}