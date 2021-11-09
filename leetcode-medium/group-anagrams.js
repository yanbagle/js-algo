/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]

*/

const groupAnagrams = (strs) => {
  if (!strs || !strs.length) {
    return [];
  }
  
  const anagramSet = {};
  
  // use the alphabetizedWord as key for the anagram groups 
  for (let word of strs) {
    let alphabetizedWord = word.split('').sort().join(''); // turn word into abc order
    anagramSet[alphabetizedWord] = anagramSet[alphabetizedWord] || []; 
    anagramSet[alphabetizedWord].push(word); // add new word onto the anagram group
  } 
  
  const results = [];
  let i = 0;
  for (let a in anagramSet) { // convert into array for return
    results[i] = anagramSet[a];
    i++;
  }
  
  return results;
}








