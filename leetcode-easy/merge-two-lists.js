/*
Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []

Input: l1 = [], l2 = [0]
Output: [0]
*/

const Node = function (data) {
  this.data = data;
  this.next;
}

const l1 = new Node(1);
const l2 = new Node(1);
const l3 = new Node(2);
const l4 = new Node(5);
const l5 = new Node(10);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

const l6 = new Node(1);
const l7 = new Node(2);
const l8 = new Node(3);
const l9 = new Node(8);
l6.next = l7;
l7.next = l8;
l8.next = l9;

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) {
    return null;
  }
  
  const mergedList = new Node();
  let mergedListPointer = mergedList;
  
  let p1 = l1;
  let p2 = l2;
  let smallest = Number.MIN_VALUE;
  
  while (p1 || p2) {    
    if (p1 && p2) {
      if (p1.data <= p2.data) {
        mergedListPointer.next = new Node(p1.data);
        p1 = p1.next;
      } else {
        mergedListPointer.next = new Node(p2.data);
        p2 = p2.next;
      }
    } else if (p1) {
      mergedListPointer.next = new Node(p1.data);
      p1 = p1.next;
    } else if (p2) { 
      mergedListPointer.next = new Node(p2.data);
      p2 = p2.next;
    }
    mergedListPointer = mergedListPointer.next;
  }
  
  return mergedList.next;
}



