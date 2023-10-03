/*
& Question 2:delete duplicates - You are given the head of a Sorted Singly Linked list. Write a function that will take the given head as input, delete all nodes that have a value that is already the value of another node so that each value appears 1 time only and return the linked list, which is still to be a sorted linked list.

*/

class Node {
   constructor(value) {
      this.val = value;
      this.next = null;
   }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node("a");
head.next.next.next.next.next = new Node("a");

function removeDupes(head) {
   let curr = head;
   while (curr) {
      let nextDistinctVal = curr.next;
      while (nextDistinctVal != null && curr.val === nextDistinctVal.val) {
         nextDistinctVal = nextDistinctVal.next;
      }
      curr.next = nextDistinctVal;
      curr = nextDistinctVal;
   }
   return head;
}

console.log(removeDupes(head))