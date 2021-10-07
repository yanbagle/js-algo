function ListNode (data) {
	this.data = data;
	this.next = null;
}

var removeNthFromEnd = function(head, n) {
	if (!head || n <= 0) {
		return head;
	}

	let curr = head;
	let runner = curr;

	while (n > 0 && curr) {
		n--;
		curr = curr.next;
	}

	// runner stops at the node before the node to be deleted
	while (curr.next) {
		curr = curr.next;
		runner = runner.next;
	}

	runner.next = runner.next.next;

	return head;

};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

removeNthFromEnd(head, 1);

while (head) {
	console.log(head.data);
	head = head.next;
}
