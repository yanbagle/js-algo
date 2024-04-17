/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

*/

/*

while lists' length is greater than 1
  for loop with i skipping 2 times per iteration because we want to grab 2 lists at a time
    l1 = lists[i]
    l2 = lists[i+1] // if not out of bounds
    merged.push(mergeList(l1,l2));
  lists = merged
  
  return lists[0]
*/

/*
class ListNode {
  constructor() {
    this.val;
    this.next;
  }
}
*/

const mergeKLists = (lists) => {
  while (lists.length > 1) {
    let temp;
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = lists[i + 1];
      const mergedList = mergeLinkedLists(l1, l2);
      temp.push(mergeList);
    }
    if (temp.length) {
      lists = temp;
    }
  }
};

const mergeLinkedLists = (l1, l2) => {
  const head = new ListNode();
  const tail = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  // leftover nodes
  tail.next = l1 ? l1 : l2;

  return head.next;
};

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const mergeKLists = (lists) => {
  while (lists.length > 1) {
    const temp = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = lists[i + 1];
      const merged = mergeTwoLists(l1, l2);
      temp.push(merged);
    }
    if (temp.length) {
      lists = temp;
    }
  }
  return lists[0];
};

const mergeTwoLists = (l1, l2) => {
  const head = new ListNode();
  const tail = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  }
  if (l2) {
    tail.next = l2;
  }

  return head.next;
};

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const mergeKLists = (lists) => {
  if (!lists || !lists.length) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeLists(l1, l2));
    }
    lists = mergedLists;
  }
  return lists[0];
};

const mergeLists = (l1, l2) => {
  const head = new ListNode();
  let tail = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  }
  if (l2) {
    tail.next = l2;
  }

  return head.next;
};

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const mergeKLists = (lists) => {
  if (!lists || !lists.length) {
    return null;
  }

  let mergedLists;

  while (lists.length > 1) {
    mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 >= lists.length ? null : lists[i + 1];
      mergedLists.push(mergeList(l1, l2));
    }
    lists = mergedLists;
  }
  return lists[0];
};

const mergeList = (l1, l2) => {
  const head = new ListNode();
  let tail = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  }
  if (l2) {
    tail.next = l2;
  }

  return head.next;
};
