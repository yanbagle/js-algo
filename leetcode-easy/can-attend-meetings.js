/*

Given an array of meeting time intervals consisting of start and end times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.

For example,
Given [ [0, 30], [5, 10], [15, 20] ],
return false.

*/

const canAttendMeetings = (meetings) => {
  if (!meetings) {
    return false;
  } else if (meetings.length === 0) {
    return true;
  }
  
  const sortedMeetings = meetings.sort((a, b) => return a[0] - b[0]);
  
  for (let i = 0; i < sortedMeetings.length - 1; i++) {
    const endTime = sortedMeetings[i][1];
    const nextMeetingStartTime = sortedMeetings[i+1][0];
    if (endTime > nextMeetingStartTime) {
      return false;
    }
  }
  
  return true;
}