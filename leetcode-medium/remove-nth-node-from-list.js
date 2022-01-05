/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

*/

const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode();
  dummy.next = head;
  
  let left = dummy; // start left at one node before the head 
  let right = head;
  
  // move right n nodes 
  while (n > 0 && right) {
    right = right.next;
    n--;
  }
  
  // move both pointers till right reaches null
  while (right) {
    left = left.next;
    right = right.next;
  }
  
  // delete the node
  left.next = left.next.next; 
  
  return dummy.next;
}