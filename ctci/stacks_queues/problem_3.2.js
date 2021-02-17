// Stack Min
// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

class MinStack {
    constructor() {
        this.stackData = [];
        this.stackSize = 0;

        this.minStackData = [];
        this.minStackSize = 0;
    }
    push(data) {
        this.stackData[this.stackSize] = data;
        if (this.minStackSize === 0 || data < this.minStackData[this.minStackSize - 1]) {
            this.minStackData[this.minStackSize] = data;
            this.minStackSize++
        }
        this.stackSize++;
        return 0;
    }
    pop() {
        if (this.stackSize < 1)
            return -1;
        if (this.stackData[this.stackSize - 1] === this.minStackData[this.minStackSize - 1]) {
            this.minStackData.pop();
            this.minStackSize--;
        }

        this.stackSize--;
        this.stackData.pop();
        return 0;
    }
    min() {
        if(this.minStackSize === 0)
            return -1;
        return this.minStackData[this.minStackSize - 1];
    }
}

let stack = new MinStack();

console.assert(stack.pop() === -1);
console.assert(stack.min() === -1);
console.assert(stack.push(10) === 0);
console.assert(stack.push(5) === 0);
console.assert(stack.push(15) === 0);
console.assert(stack.push(6) === 0);
console.assert(stack.push(3) === 0);
console.assert(stack.push(7) === 0);
console.assert(stack.min() === 3);
console.assert(stack.pop() === 0);
console.assert(stack.min() === 3);
console.assert(stack.pop() === 0);
console.assert(stack.min() === 5);
console.assert(stack.pop() === 0);
console.assert(stack.min() === 5);
console.assert(stack.pop() === 0);
console.assert(stack.min() === 5);
console.assert(stack.pop() === 0);
console.assert(stack.min() === 10);
console.assert(stack.pop() === 0);
console.assert(stack.min() === -1);
console.assert(stack.pop() === -1);