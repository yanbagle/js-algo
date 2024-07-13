const isValid = (s) => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];

  for (let c of s) {
    // push onto stack if open parentheses
    if (map[c]) {
      stack.push(c);
      continue;
    }

    const top = stack[stack.length - 1]; // top has to be an open parentheses
    const closedParent = map[top]; // get the closed parentheses of the top parentheses
    if (closedParent === c) {
      // see if it's a match
      stack.pop();
      continue;
    }
    return false;
  }
  return stack.length === 0;
};
