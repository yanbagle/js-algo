/*

https://www.lintcode.com/problem/919/

*/

const minMeetingRooms = (intervals) => {
  const start = [];
  const end = [];
    for (let i = 0; i < intervals.length; i++) {
    start[i] = intervals[i][0];
    end[i] = intervals[i][1];
  }
  start.sort();
  end.sort();
  
  let s = 0;
  let e = 0;
  let res = 0;
  let currentRooms = 0;
  
  while (s < intervals.length) {
    if (start[s] < end[e]) { // if they overlap, we need a room 
      currentRooms++;
      s++;
    } else {
      currentRooms--; // we can release a room if they don't overlap anymore
      e++;
    }
    res = Math.max(res, currentRooms);
  }
  
  return res;
}

