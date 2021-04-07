/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

const validParentheses = (str) => {
  if (!str) {
    return false;
  }
  
  const validParentheses = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  
  const stack = [];
  
  for (const char of str) {
    // only putting in open parentheses 
    if (validParentheses[char]) {
      stack.push(char);
    } else {
      // we have a closed parentheses here, so we check if top of the stack has the open parentheses 
      const maybeOpenParentheses = stack[stack.length - 1];
      if (validParentheses[maybeOpenParentheses] !== char) {
        return false;
      }
      stack.pop();
    }
  }
  
  return stack.length === 0;
  
}