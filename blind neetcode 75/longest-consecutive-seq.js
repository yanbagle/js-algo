const longestConsecutive = (nums) => {
  const numsMap = {};
  for (let n of nums) {
    numsMap[n] = true;
  }

  let longestSteak = 0;

  for (let n of nums) {
    if (!numsMap[n - 1]) {
      // if is leading number
      let steak = 1;
      while (numsMap[n + steak]) {
        steak++;
      }
      longestSteak = Math.max(longestSteak, steak);
    }
  }
  return longestSteak;
};
