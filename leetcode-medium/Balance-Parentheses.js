/*

https://leetcode.com/discuss/interview-question/124551/

*/

const balanceParen = (str) => {
  const stack = []; // value example = ['(' , 0] - 2nd value is the char index
  const removeIndices = {}; // for all the extra closed parens we encounter 
  
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (c === '(') { // open paren, we push onto the stack
      stack.push(['(', i]);
    } else if (c === ')'){
      if (!stack.length) { // if stack is already empty, use removeIndices to store index to be removed
        removeIndices[i] = true;
      } else {
        stack.pop(); // closed paren, we pop it out of the stack
      }
    }
  }
  
  while (stack.length) { // consolidate the 2 data structures 
    const index = stack.pop()[1];
    removeIndices[index] = true;
  }
  
  let res = '';
  // loop through string and skip the index that's in our removeIndices set 
  for (let i = 0; i < str.length; i++) {
    if (!removeIndices[i]) { // if character is not in the remove set
      res += str.charAt(i);
    }
  }
  
  return res;
}