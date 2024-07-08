const isPalindrome = (s) => {
  let str = "";
  for (const c of s) {
    if (c.match(/^[a-z0-9]+$/i)) {
      str += c.toUpperCase();
    }
  }

  let l = 0;
  let r = str.length - 1;

  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
