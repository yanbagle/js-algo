const maxArea = (heights) => {
  let l = 0;
  let r = heights.length - 1;

  // area of rectangle = W * H
  // Width = r - l
  // height = min of heights[r], heights[l]

  let max = 0;
  while (l < r) {
    const area = (r - l) * Math.min(heights[r], heights[l]);
    max = Math.max(max, area);
    if (heights[r] < heights[l]) {
      r--;
    } else {
      l++;
    }
  }
  return max;
};
