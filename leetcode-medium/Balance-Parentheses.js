/*

https://leetcode.com/discuss/interview-question/124551/

*/

const balanceParen = (str) => {
  const stack = []; // value example = ['(' , 0] - 2nd value is the char index
  const removeIndices = {};
  
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (c === '(') {
      stack.push(['(', i]);
    } else if (c === ')'){
      if (!stack.length) { // if stack is already empty, use removeIndices to store index to be removed
        removeIndices[i] = true;
      } else {
        stack.pop();
      }
    }
  }
  
  while (stack.length) { // consolidate the 2 data structures 
    const index = stack.pop()[1];
    removeIndices[index] = true;
  }
  
  let validStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!removeIndices[i]) { // if character is not in the remove set
      validStr += str.charAt(i);
    }
  }
  
  return validStr;
}