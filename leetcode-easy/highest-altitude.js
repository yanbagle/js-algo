// https://leetcode.com/problems/find-the-highest-altitude/description/

const largestAltitude = (gain) => {
  const altitude = [0];
  let peak = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude.push(gain[i] + altitude[i]);
    peak = Math.max(peak, altitude[i + 1]);
  }
  return peak;
};
