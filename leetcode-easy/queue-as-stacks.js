/*

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

*/

function Queue () {
  this.s1 = []; // will contain the right order of the queue 
  this.s2 = [];
}

Queue.prototype.push = function (val) {
  if (val === null) {
    return;
  }
  
  while (this.s1.length) {
    this.s2.push(this.s1.pop()); // reverses the order
  }
  this.s2.push(val);
  while (this.s2.length) {
    this.s1.push(this.s2.pop()); // reverses it back
  }
}

Queue.prototype.pop = function () {
  return this.s1.pop();
}

Queue.prototype.peek = function () {
  return this.s1.length ? this.s1[this.s1.length - 1] : null;
}

Queue.prototype.empty = function () {
  return this.s1.length; 
}