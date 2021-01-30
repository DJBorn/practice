// Implement a queue using stacks
// O(1) Insert
// O(n) Remove

var queueStack = function() {
    this.stack1 = [];
    this.stack2 = [];
}

queueStack.prototype = {
    enqueue: function(val) {
        this.stack1.push(val);
    },
    dequeue: function() {
        if(this.stack2.length === 0)
            while(this.stack1.length > 0)
                this.stack2.push(this.stack1.pop());

        if(this.stack2.length === 0)
            return null;
        else return this.stack2.pop();
    }
}

var myQueueStack = new queueStack();

console.log("Enqueue 1");
myQueueStack.enqueue(1);
console.log("Enqueue 2");
myQueueStack.enqueue(2);
console.log("Enqueue 3");
myQueueStack.enqueue(3);
console.log("Dequeue");
console.log(myQueueStack.dequeue());
console.log("Enqueue 4");
myQueueStack.enqueue(4);
console.log("Enqueue 5");
myQueueStack.enqueue(5);
console.log("Dequeue");
console.log(myQueueStack.dequeue());
console.log("Enqueue 6");
myQueueStack.enqueue(6);
console.log("Dequeue");
console.log(myQueueStack.dequeue());
console.log("Dequeue");
console.log(myQueueStack.dequeue());
console.log("Dequeue");
console.log(myQueueStack.dequeue());
console.log("Dequeue");
console.log(myQueueStack.dequeue());
console.log("Dequeue");
console.log(myQueueStack.dequeue());