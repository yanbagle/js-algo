// the trick to remember this that there's 3 var we need: curr, prev, next
// it starts with setting next = curr.next; -> the only var that we did not initialize
// every line after is setting the variable that was previously saved in the line above

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next;

  while (curr) {
    next = curr.next; // literally setting next to curr's next node
    curr.next = prev; // this makes sense since we are reversing
    prev = curr; // prev becoming the curr
    curr = next; // advance curr
  }
  return prev;
};
