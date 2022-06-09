class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const newNode = {
            data: data,
            next: null
        }

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
            return;
        }

        this.last.next = newNode;
        this.last = this.last.next;
    }

    dequeue() {
        if(!this.last)
            throw new Error("Cannot dequeue empty queue");
        
        const returnValue = this.first.data;
        this.first = this.first.next;

        if(this.first === null)
            this.last = null;
        return returnValue;
    }

    isEmpty() {
        return Boolean(!this.first);
    }

    peek() {
        if(!this.first)
            throw new Error("Cannot peek empty queue");
        return this.first.data;
    }
}

module.exports = Queue;

let queue = new Queue();

console.assert(queue.isEmpty() === true);
queue.enqueue(1);
console.assert(queue.peek() === 1);
console.assert(queue.isEmpty() === false);
queue.enqueue(2);
console.assert(queue.peek() === 1);
queue.enqueue(3);
console.assert(queue.dequeue() === 1);
console.assert(queue.peek() === 2);
console.assert(queue.dequeue() === 2);
console.assert(queue.peek() === 3);
console.assert(queue.isEmpty() === false);
queue.enqueue(4);
queue.enqueue(5);
console.assert(queue.peek() === 3);
console.assert(queue.dequeue() === 3);
console.assert(queue.peek() === 4);
console.assert(queue.dequeue() === 4);
console.assert(queue.peek() === 5);
console.assert(queue.dequeue() === 5);
console.assert(queue.isEmpty() === true);