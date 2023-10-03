/*
&  You are given the head of a linked List.Check if there is a cycle and if yes, return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer . Do not modify the linked List

*/


//! brute force

//* we can use hashtable and store visited nodes. Whenever we again come across it we will simply return it

//! optimised => Lloyd tortoise and hare 


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

const checkLoop = function (head){
  if(!head) return null;
  if(!head.next) return null;

  let hare = head;
  let tortoise = head;
  while(hare && hare.next){
    hare = hare.next.next;
    tortoise = tortoise.next;
    if(hare === tortoise) break;
  }
  if(hare!==tortoise) return null;

  let pointer = head;
  while(pointer!==tortoise){
    pointer = pointer.next;
    tortoise = tortoise.next;
  }
  return tortoise;
}


// for testing
const one  = new Node(1);
const two  = new Node(2);
const three  = new Node(3);
const four  = new Node(4);
const five  = new Node(5);
const six  = new Node(6);


one.next=two;
two.next=three;
three.next=four;
four.next=five;
five.next=six;
//make a loop
six.next = two;

let head = one;

console.log(checkLoop(head));
