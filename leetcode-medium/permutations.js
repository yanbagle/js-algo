// LeetCode 46 - Permutations

const permute = (nums, set=[], answers=[]) => {
  if (!nums.length) {
    answers.push([..set]);
  }
  
  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => index !== i);
    set.push(nums[i]);
    permute(newNums, set, answers);
    set.pop();
  }
  
  return answers;
}