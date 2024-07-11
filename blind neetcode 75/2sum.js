const twoSum = (nums, target) => {
  const numsTable = {};
  for (let i = 0; i < nums.length; i++) {
    numsTable[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const target2 = target - num;
    if (numsTable[target2] && numsTable[target2] !== i) {
      return [numsTable[target2], i];
    }
  }
};
