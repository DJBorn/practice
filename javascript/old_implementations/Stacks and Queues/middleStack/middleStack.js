// Stack implementation with additiona get/delete middle methods
// O(1) Push normal and middle
// O(1) Pop normal and middle
var middleStack = function() {
    this.tail = null;
    this.middle = null;
    this.even = true;
}

middleStack.prototype = {
    push: function(val) {
        if(!this.tail) {
            this.tail = {
                data: val,
                next: null,
                prev: null
            }
            this.middle = this.tail;
            this.even = false;
        }
        else {
            this.tail.next = {
                data: val,
                next: null,
                prev: this.tail
            }
            this.tail = this.tail.next;
            if(this.even) {
                this.middle = this.middle.next;
                this.even = false;
            }
            else
                this.even = true;
        }
    },
    pop: function() {
        if(!this.tail)
            return null;
        if(!this.even) {
            this.middle = this.middle.prev;
            this.even = true;
        }
        else
            this.even = false;
        var ret = this.tail.data;
        this.tail = this.tail.prev;
        return ret;
    },
    deleteMiddle: function() {
        if(!this.middle)
            return;
        else if(!this.middle.prev)
            this.middle = this.middle.next;
        else {
            if(!this.even) {
                this.middle = this.middle.prev;
                this.middle.next = this.middle.next.next;
                this.middle.next.prev = this.middle;
                this.even = true;
            }
            else {
                this.middle = this.middle.next;
                this.middle.prev = this.middle.prev.prev;
                this.middle.prev.next = this.middle;
                this.even = false;
            }
        }
    },
    getMiddle: function() {
        if(this.middle)
            return this.middle.data;
    }
}

var myMiddleStack = new middleStack();

console.log("Push 1");
myMiddleStack.push(1);
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Push 2");
myMiddleStack.push(2);
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Push 3");
myMiddleStack.push(3);
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Push 4");
myMiddleStack.push(4);
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Push 5");
myMiddleStack.push(5);
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Pop");
console.log(myMiddleStack.pop());
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Delete middle");
myMiddleStack.deleteMiddle();
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Delete middle");
myMiddleStack.deleteMiddle();
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Push 6");
myMiddleStack.push(6);
console.log("Get middle");
console.log(myMiddleStack.getMiddle());
console.log("Pop");
console.log(myMiddleStack.pop());
console.log("Pop");
console.log(myMiddleStack.pop());
console.log("Pop");
console.log(myMiddleStack.pop());