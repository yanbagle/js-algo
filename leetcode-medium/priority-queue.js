function Node (d, p) {
  this.data = d;
  this.priority = p;
}

function LL () {
  this.head = new Node(null, -1);
}

LL.prototype.peek = function () {
  return head.next.data;
}

LL.prototype.pop = function () {
  const temp = head.next;
  head.next = head.next.next;
  return temp.data;  
}

LL.prototype.insert = function (d, p) {  
  if (!head.next) { // if LL is empty 
    head.next = new Node(d, p);
  } 
  else if (p < head.next.priority) { // if new node has the highest priority
    // then insert in the beginning of the list
    const newHead = new Node(d, p);
    const temp = head.next;
    head.next = newHead;
    newHead.next = temp;
  } 
  else { // need to find where to add new node
    let curr = head.next;
    while (curr.next && p > curr.next.priority) {
      curr = curr.next;
    }
    const temp = curr.next;
    curr.next = new Node(d, p);
    curr.next.next = temp;
  }  
}