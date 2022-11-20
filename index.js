/*
class NewNode{
  constructor(value){
    this.value=value,
    this.next=null
  }
}


class Stack{
  constructor(){
    this.top=null;
    this.bottom=null;
    this.length=0;
  }

  peek(){
    return this.top;
  }

  push(value){
    const newNode=new NewNode(value);
    if(this.length==0){
      this.top=newNode;
      this.bottom=newNode;
    }else{
      const holdingPointer = this.top;
      this.top= newNode;
      this.top.next=holdingPointer
    }
    this.length++
    return this; 
  }

  pop(){
    if(!this.top){
      return null
    }
    if(this.top===this.bottom){
      this.bottom=null
    }
    this.top=this.top.next;
    this.length--;

    return this;
  }


}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
console.log(myStack.peek()); */

/* class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length=0;
    this.stack=[];
  }

  peek(){
    return this.stack[this.length-1];
  }

  push(value){
    this.stack.push(value);
    this.bottom=this.stack[0];
    this.length++;
    this.top=this.stack[this.length-1];

    return this;
  }

  pop(){
    if(!this.top){
      return null
    }
    if(this.top===this.bottom){
      this.bottom=null;
      this.top=null;
    }else
      this.top=this.stack[this.length-2]
    this.length--;
    this.stack.pop();

    return this;
    
  }
  
}

const myStack= new Stack();
myStack.push(8);
myStack.push(5);
myStack.push(6);
myStack.push(22);
myStack.pop(22);
console.log(myStack.push(2)) */

/* class NewNode {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  peek() {
    return this.front.value;
  }

  enqueue(value) {
    const newNode = new NewNode(value);
    if (this.length === 0) {
      this.front = newNode;
      this.rear = this.front;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.front) {
      return null
    }
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.length--;
    return this
  }

}

const myQ = new Queue();

myQ.enqueue(44);
myQ.enqueue(4422);
myQ.enqueue(78);
myQ.dequeue()

console.log(myQ.peek())
console.log(myQ) */

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.last[this.last.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();

console.log(myQueue.peek())
