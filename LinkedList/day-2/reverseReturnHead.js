/*

&  you are given the head of a singly linked list . Write a function that will take the given head as input,reverse the linked list and return the new head of the reversed Linked list

* clarification

single node => return the same node

null => return empty

1->2->3->null

3->2->1->null

*/

class Node {
  constructor(value) {
     this.val = value;
     this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function reverseLinkedList(head){
  let prev = null;
  let current = head;
  while(current){
    let next= current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
console.log(reverseLinkedList(head))
