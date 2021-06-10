/*

* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Input: head = [0]
Output: 0

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Input: head = [0,0]
Output: 0

*/

const getDecimalValue = (head) => {
  if (!head) {
    return null;
  }
  
  let binaryNum = "";
  let pointer = head;
  while (pointer) {
    binaryNum += pointer.val;
    pointer = pointer.next;
  }
  
  const decimal = parseInt(binaryNum, 2);
  return decimal;
}




function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
const a = ListNode(1);
const b = ListNode(0);
const c = ListNode(1);
a.next = b;
b.next = c;

console.log(getDecimalValue(a));









