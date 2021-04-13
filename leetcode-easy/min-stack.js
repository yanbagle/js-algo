/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

o(1)

*/

function MinStack () {
  this.stack = [];
  this.minStack = [];
}

MinStack.prototype.push = function(val) {
  if (val === null || typeof val !== 'number') {
    return;
  }
  
  if (this.stack.length === 0) {
    this.stack.push(val);
    this.minStack.push(val);
  } else {
    const min = this.minStack.pop();
    this.minStack.push(min);
    if (val < min) { // new min
      this.minStack.push(val);
    } else {
      this.minStack.push(min);
    }
    this.stack.push(val);
  }
}

MinStack.prototype.pop = function() {
  this.minStack.pop();
  return this.stack.pop();
}

MinStack.prototype.top = function() {
  if (this.stack.length === 0) {
    return null;
  }
  
  return this.stack[this.stack.length - 1];
}


MinStack.prototype.getMin = function() {
  if (this.stack.length === 0) {
    return null;
  }
  
  return this.minStack[this.minStack.length - 1];
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2




