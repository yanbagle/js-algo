function rotateLinkedList (linkedList, count) {
    if (!linkedList || count <= 0) {
        return null;
    }

    let current = linkedList;

    while (count > 1 && current) {
        current = current.next;
        count--;
    }

    if (!current) {
        return null;
    }

    let kthNode = current;

    while (current.next) {
        current = current.next;
    }

    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
}
