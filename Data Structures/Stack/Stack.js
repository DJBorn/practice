// Stack implementation in JavaScript using objects as storage. Functions include:
// - Push
// - Pop
// - Peek
// - isEmpty

var Stack = function () {
	var top = null;

	this.push = function(element) {
		if(!element)
			return false;

		var node = {
			data: element,
			next: null
		}

		if(!top)
			top = node;
		else {
			node.next = top;
			top = node;
		}
		return true;
	}

	this.pop = function() {
		if(!top)
			return null;
		var ret = top.data;
		top = top.next;
		return ret;
	}

	this.peek = function() {
		if(!top)
			return null;
		return top.data;
	}

	this.isEmpty = function() {
		if(!top)
			return true;
		return false;
	}
}

console.log("Create new stack");
var stack = new Stack();
console.log("Push 7 into stack");
console.log(stack.push(7));
console.log("Push null into stack");
console.log(stack.push(null));
console.log("Push 3 into stack");
console.log(stack.push(3));
console.log("Peek");
console.log(stack.peek());
console.log("is empty");
console.log(stack.isEmpty());
console.log("Pop");
console.log(stack.pop());
console.log("Peek");
console.log(stack.peek());
console.log("Pop");
console.log(stack.pop());
console.log("Peek");
console.log(stack.peek());
console.log("is empty");
console.log(stack.isEmpty());
