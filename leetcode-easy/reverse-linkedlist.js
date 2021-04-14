/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

const Node = function (data) {
  this.data = data;
  this.next;
}

const reverseLinkedList = (ll) => {
  if (!ll) {
    return; 
  }
  
  const head = new Node();
  head.next = new Node();
  const reversedLL = head.next;
  
  reverse(ll, reversedLL);
  return head.next;
}

const reverse = (ll, reversedLL) => {
  if (ll) {
    reversedLL = reverse(ll.next, reversedLL);
    reversedLL.next = new Node(ll.data);
    reversedLL = reversedLL.next;
  } 
  return reversedLL;
}
