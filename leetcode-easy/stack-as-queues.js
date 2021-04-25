/*

Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.

*/

function Stack () {
  this.q1 = [];
  this.q2 = [];
}

Stack.prototype.push = function (val) {
  if (val === null) {
    return;
  }
  
  if (this.q1.length === 0) {
    this.q1.push(val);
    while (this.q2.length) {
      this.q1.push(this.q2.shift());
    }
  } else if (this.q2.length === 0) {
    this.q2.push(val);
    while (this.q1.length) {
      this.q2.push(this.q1.shift());
    }
  }
}

Stack.prototype.pop = function () {
  return this.q1.length !== 0 ? this.q1.shift() : this.q2.shift();
}

Stack.prototype.top = function () {
  return this.q1.length !== 0 ? this.q1[0] : this.q2[0];
}

Stack.prototype.isEmpty = function () {
  return this.q1.length === 0 && this.q2.length === 0;
}






