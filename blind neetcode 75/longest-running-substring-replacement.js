const characterReplacement = (s, k) => {
  let res = 0;
  let l = 0;
  let r = 0;
  const count = {};

  while (r < s.length) {
    const c = s[r];
    count[c] = count[c] ? count[c] + 1 : 1;
    const highestFreq = Math.max(...Object.values(count));

    const window = r - l + 1;
    if (window - highestFreq > k) {
      // if we reach the highest allowable replacement
      // shrink our window beginning at L pointer
      count[s[l]]--;
      l++; // advance l to shrink our window
    }

    res = Math.max(res, r - l + 1);
    r++;
  }

  return res;
};
