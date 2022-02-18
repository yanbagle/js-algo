/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

https://leetcode.com/problems/merge-intervals/

*/

const merge = (intervals) => {
  intervals.sort((a,b) => {
    return a[0] - b[0];
  });
  
  const res = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const lastEnd = res[res.length - 1][1];
    const start = intervals[i][0];
    const end = intervals[i][1];
    
    if (start <= lastEnd) { // overlapping
      newEnd = Math.max(end, lastEnd);
      res[res.length - 1][1] = newEnd;
    } else {
      res.push(intervals[i]);  
    }
  }
  
  return res;
}

/*******************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************
*****************************************************************************************************************************/

const merge = (intervals) => {
  const sorted = intervals.sort((a,b) => {
    return a[0] - b[0];
  });
  
  const output = [sorted[0]];
  
  for (let i = 1; i < sorted.length; i++) {
    const lastEnd = output[output.length - 1][1];
    const start = sorted[i][0];
    const end = sorted[i][1];
    
    if (start <= lastEnd) { // if they overlapped
      output[output.length - 1][1] = Math.max(lastEnd, end);
    } else {
      output.push([start,end]);
    }
  }
  
  return output;
}