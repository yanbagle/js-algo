/*

https://leetcode.com/problems/3sum/

*/

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

  // three pointers: i, l, r
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // avoid duplicates
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
        // found our 3sum
        res.push([nums[l], nums[r], nums[i]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          // avoid duplicates again
          l++;
        }
      }
    }

    return res;
  }
};

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const threeSum = (nums) => {
  nums.sort((a, b) => {
    return a - b;
  });

  let l;
  let r;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
    return res;
  }
};

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const threeSum = (nums) => {
  const res = [];
  let l;
  let r;
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // we want to skip over same values because it would be have scanned through before
      continue;
    }

    // nums[i] = the first value
    //  i  L        R
    // [1, 2, 3, 4, 5]
    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        // if equal to 0, found our three sum
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          // skipping over the same values for the same reason above
          l++;
        }
      }
    }
  }

  return res;
};
