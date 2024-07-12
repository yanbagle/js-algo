const hasDuplicate = (nums) => {
  const map = {};
  for (let n of nums) {
    if (map[n]) {
      return true;
    }
    map[n] = true;
  }
  return false;
};
