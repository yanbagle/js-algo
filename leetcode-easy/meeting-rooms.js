/*

https://www.lintcode.com/problem/920/

*/

const canAttendMeetings = (intervals) => {
  intervals.sort();
  let prevEnd = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) { // if current start time is less than last meeting's end time, they're overlapping
      return false;
    }
    prevEnd = intervals[i][1];
  }
  return true;
}