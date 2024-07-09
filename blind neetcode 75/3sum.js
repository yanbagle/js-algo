const threeSum = (nums) => {
  if (!nums) {
    return [];
  }

  nums.sort((a, b) => {
    return a - b;
  });

  let l;
  let r;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      // avoid dups
      continue;
    }
    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        // sum === 0, found our 3sum
        res.push([nums[i], nums[l], nums[r]]);
        // avoid dups again
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  return res;
};
