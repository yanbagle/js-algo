const isAnagram = (s, t) => {
  if (!s || !t || s.length !== t.length) {
    return false;
  }

  const freqTable = {};
  for (let c of s) {
    freqTable[c] = freqTable[c] ? freqTable[c] + 1 : 1;
  }

  for (let c of t) {
    if (!freqTable[c] || freqTable[c] === 0) {
      return false;
    }
    freqTable[c]--;
  }
  return true;
};
