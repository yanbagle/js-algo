/*

https://leetcode.com/problems/reorder-list/

*/

const reorderList = (head) => {
  const arr = [];
  let dummy = head;
  
  // put all nodes onto array, so we can traverse it easier later
  while (dummy) {
    arr.push(new ListNode(dummy.val));
    dummy = dummy.next;
  }
  
  let left = 0;
  let right = arr.length - 1;
  
  let reorder = new ListNode();
  const newHead = reorder;
  while (left <= right && right >= left) {
    // alternate between left and right pointers and add it to new reorder list 
    reorder.next = arr[left];
    reorder.next.next = arr[right];
    reorder = reorder.next.next;
    left++;
    right--;
  }
  
  return newHead.next;
}