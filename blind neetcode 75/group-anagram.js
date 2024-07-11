const groupAnagrams = (strs) => {
  const anagramTable = {};
  for (let str of strs) {
    const alphabetizeStr = str.split("").sort().join("");
    anagramTable[alphabetizeStr] = anagramTable[alphabetizeStr]
      ? [...anagramTable[alphabetizeStr], str]
      : [str];
  }

  const res = [];
  for (let anagram in anagramTable) {
    const anagrams = anagramTable[anagram];
    res.push(anagrams);
  }
  return res;
};
