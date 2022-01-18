/*

https://leetcode.com/problems/non-overlapping-intervals/

*/

const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  
  let res = 0;
  let prevEnd = intervals[0][1];
  let start;
  let end;
  
  for (let i = 1; i < intervals.length; i++) {
    start = intervals[i][0];
    end = intervals[i][1];
    if (start >= prevEnd) { // they don't overlap
      prevEnd = end;
    } else { // overlaps
      res++;
      prevEnd = Math.min(prevEnd, end);  
    }
  }
  
  return res;
}