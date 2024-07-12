const topKFrequent = (nums, k) => {
  // first build our freq map
  const freqMap = {};
  for (let n of nums) {
    freqMap[n] = freqMap[n] ? freqMap[n] + 1 : 1;
  }
  // convert freq map into an array with each ele in its corresponding freq index
  // e.g. if 2 appears 3 times, 1 is under index 3 in freqArr => [[], [], [], [2]]
  const freqArr = [];
  for (let n in freqMap) {
    const freq = freqMap[n];
    freqArr[freq] = freqArr[freq] ? [...freqArr[freq], n] : [n];
  }

  const res = [];
  // loop through freqArr backwards and get the top k most frequent elements
  for (let i = freqArr.length - 1; i >= 0; i--) {
    const arr = freqArr[i];
    if (arr && arr.length) {
      for (let ele of arr) {
        res.push(ele);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
  return res;
};
