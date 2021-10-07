// You are given two non-empty linked lists representing two non-negative integers.
//     The digits are stored in reverse order and each of their nodes contain a single digit.
//     Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function Node (data) {
    this.data = data;
    this.next = null;
}

function addTwoNumbers(l1, l2) {

    if (!l1 || !l2) {
        return null;
    }

    let output = new Node(null);
    let head = output;
    let carry = 0;
    while (l1 || l2) {
        let value = l1.data + l2.data + carry;
        if (value > 9) {
            carry = 1;
            value = value % 10;
        } else {
            carry = 0;
        }
        output.next = new Node(value);
        output = output.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    if (carry) {
        output.next = new Node(carry);
    }

    return head.next;
}

// let l1 = new Node(2);
// l1.next = new Node(4);
// l1.next.next = new Node(3);
//
// let l2 = new Node(5);
// l2.next = new Node(6);
// l2.next.next = new Node(4);

let l1 = new Node(5);
l1.next = new Node(8);

let l2 = new Node(2);
l2.next = new Node(9);

let output = addTwoNumbers(l1, l2);
let str = '';
while(output) {
    str += output.data;
    output = output.next;
}

console.log(str);