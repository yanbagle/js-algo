/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next;
  
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;
}














