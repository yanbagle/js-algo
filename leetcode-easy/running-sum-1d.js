// https://leetcode.com/problems/running-sum-of-1d-array/description/

const runningSum = (nums) => {
  let runningTotal = 0;
  const res = [];
  for (let num of nums) {
    runningTotal += num;
    res.push(runningTotal);
  }
  return res;
};
