/*

MaxStack() Initializes the stack object.
void push(int x) Pushes element x onto the stack.
int pop() Removes the element on top of the stack and returns it.
int top() Gets the element on the top of the stack without removing it.
int peekMax() Retrieves the maximum element in the stack without removing it.
int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.

*/

var MaxStack = function() {
    this.stack = [];
    this.maxStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    if (!this.stack.length) {
      this.stack.push(x);
      this.maxStack.push(x);
      return;
    } 
    
    const max = this.peekMax();
    if (x > max) { // new max
        this.maxStack.push(x);
    } else {
      this.maxStack.push(max);
    }
    this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    this.maxStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  if (!this.maxStack.length) {
    return null;
  }
  
  return this.maxStack[this.maxStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    return this.maxStack.pop();
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */