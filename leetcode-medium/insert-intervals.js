/*

https://leetcode.com/problems/insert-interval/

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/

const insert = (intervals, newInterval) => {
  const res = [];
  
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) { // if newInterval comes BEFORE the current interval 
      res.push(newInterval);
      return [...res, ...intervals.slice(i)]; // add the rest of the intervals and return, we're done
    } else if (newInterval[0] > intervals[i][1]) { // if newInterval goes AFTER the current interval 
      res.push(intervals[i]); // push current interval, and newInterval remains the same
    } else { // if newInterval and interval are overlapping 
      const start = Math.min(newInterval[0], intervals[i][0]); 
      const end = Math.max(newInterval[1], intervals[i][1]); 
      newInterval = [start, end];
    }
  }
  
  // if the first condition never executes, need to add the remaining newInterval into res
  res.push(newInterval);
  return res;
}