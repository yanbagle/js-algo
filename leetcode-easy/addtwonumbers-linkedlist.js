function Node (data) {
  this.data = data;
  this.next;
}

const n1 = new Node(3);
const n2 = new Node(1);
n1.next = n2;

const n3 = new Node(5);
const n4 = new Node(6);
const n5 = new Node(9);
n3.next = n4;
n4.next = n5;

const addTwoNumbersLinkedList = (l1, l2) => {
  if (!l1 || !l2) {
    return;
  }
  
  let curr1 = l1;
  let curr2 = l2;
  
  const sum = new Node(); // head node
  let currSum = sum;
  let carry = 0;
  let remainder = 0; 
  while (curr1 || curr2) {
    let add = carry;
    if (curr1) {
      add += curr1.data;
      curr1 = curr1.next;
    }
    if (curr2) {
      add += curr2.data;
      curr2 = curr2.next;
    }
    carry = add >= 10 ? 1 : 0;
    remainder = add % 10;
    currSum.next = new Node(remainder);
    currSum = currSum.next;
  }
  
  if (carry) {
    currSum.next = new Node(carry);
  }
  
  return sum.next;
}

