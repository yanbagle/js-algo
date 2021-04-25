/*

Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

*/

const Node = function (data) {
  this.data = data;
  this.next
}

const removeElement = (head, val) => {
  if (!head || val === null || val === undefined) {
    return;
  }
  
  let curr = head;
  
  // make sure head is not going to be deleted
  while (curr && curr.data && curr.data === val) {
    curr = curr.next;
  }
  const newHead = curr;
  
  let prev = curr;
  curr = curr.next;
  
  while (curr) {
    if (curr.data === val) {
      prev.next = curr.next;
      curr = curr.next
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  
  return head;
  
}
