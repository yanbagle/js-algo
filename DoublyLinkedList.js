function Node (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList () {
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.getHead = function () {
    return this.head;
};

DoublyLinkedList.prototype.addToHead = function (data) {
    const node = new Node(data);
    node.next = this.head;
    if (this.head !== null) {
        this.head.prev = node;
    }
    node.prev = null;
    this.head = node;
    if (this.tail === null) {
        this.tail = node;
    }
};

DoublyLinkedList.prototype.addToTail = function (data) {
    const node = new Node(data);
    if (this.head === null && this.tail === null) {
        this.head = node;
        this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.tail.next = null;
    }
};

const ll = new DoublyLinkedList();
ll.addToHead('A');
ll.addToTail('B');
ll.addToHead('C');
let head = ll.getHead();
while (head) {
    console.log(head.data);
    head = head.next;
}