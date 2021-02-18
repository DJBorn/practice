// Queue via Stacks
// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
	constructor() {
		this.inputStack = [];
		this.outputStack = [];
	}
	
	enqueue(data) {
		this.inputStack.push(data);
	}

	dequeue() {
		if(this.outputStack.length === 0)
			this.pourStacks();
		
		if(this.outputStack.length === 0)
			throw new Error("Unable to dequeue empty queue");

		return this.outputStack.pop();
	}

	pourStacks() {
		while(this.inputStack.length >0)
			this.outputStack.push(this.inputStack.pop());
	}
}


let queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.assert(queue.dequeue() === 1);
console.assert(queue.dequeue() === 2);
console.assert(queue.dequeue() === 3);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
console.assert(queue.dequeue() === 4);
console.assert(queue.dequeue() === 5);
console.assert(queue.dequeue() === 6);
console.assert(queue.dequeue() === 7);
console.assert(queue.dequeue() === 8);
console.assert(queue.dequeue() === 9);