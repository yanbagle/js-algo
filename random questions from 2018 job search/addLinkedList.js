function LLNode (data) {
    this.data = data;
    this.next;
} 

function addLinkedList(n1, n2) {
    
    if (!n1 || !n2) {
        return null;
    }
    
    let resultNode = new LLNode(null);
    let head = resultNode;
    let carry = 0;
    
    while (n1 || n2) {
        let total = carry;
        if (n1) {
            total += n1.data;  
            n1 = n1.next;
        }
        if (n2) {
            total += n2.data;
            n2 = n2.next;
        }
        if (total > 9) {
            carry = 1;
            total = total % 10;
        } else {
            carry = 0;
        }
        
        resultNode.next = new LLNode(total);
        resultNode = resultNode.next;
    }

	if (carry) {
		resultNode.next = new LLNode(carry);
	}
    
    return head.next;
} 

let ll1 = new LLNode(1);
ll1.next = new LLNode(1);
let ll2 = new LLNode(1);
ll2.next = new LLNode(1);

let total = addLinkedList(ll1, ll2);
let str = '';
while (total) {
    str += total.data;
    total = total.next;
}

window.onload = function() {
    document.getElementById('console').innerHTML = str;
};
