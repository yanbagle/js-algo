const minEatingSpeed = (piles, h) => {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  // binary search through the range of l => r
  // r being the max of piles will the be worst case result
  // k is the rate of bananas eaten per hour (the middle pointer in the regular binary search algo)
  while (l <= r) {
    const k = Math.floor(l + r / 2);
    let hours = 0; // calculate how many hours it will take to consume all the piles at a rate of k bananas per hour
    for (let p of piles) {
      // each loop is seeing how many bananas we can eat at the rate of k bananas per hour
      hours += Math.ceil(p / k); // need to round up because we need to finish all bananas per pile
    }

    if (hours <= h) {
      // this means we can still possibly finish each pile faster
      res = Math.min(res, k);
      r = k - 1;
    } else {
      l = k + 1;
    }
  }
  return res;
};
