// Given a linked list, swap every two adjacent nodes and return its head.
//
//     For example,
//     Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.


function Node (data) {
    this.data = data;
    this.next = null;
}

function swap (head) {
    if (!head) {
        return null;
    }

    let curr = head;
    let next = curr.next;

    while (next) {
        let tempData = curr.data;
        curr.data = next.data;
        next.data = tempData;
        console.log('curr: ' + curr.data);
        console.log('next: ' + next.data);
        curr = next;
        next = next.next;
    }

    return head;
}

let node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);

let swapped = swap(node);

while(swapped) {
    console.log(swapped.data);
    swapped = swapped.next;
}