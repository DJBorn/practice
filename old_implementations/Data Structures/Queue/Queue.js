// Queue implementation in JavaScript using a linked list to store data. Functions include:
// - add
// - remove
// - peek
// - isEmpty

var Queue = function() {
	var first = null;
	var last = null;

	this.add = function(element) {
		if (!element)
			return false;

		var node = {
			data: element,
			next: null
		}

		if(!first){
			first = node;
			last = node;
		}
		else {
			last.next = node;
			last = last.next;
		}
		return true;
	}

	this.remove = function() {
		if(!first)
			return null;

		var ret = first.data;
		first = first.next;
		if(!first)
			last = null;
		return ret;
	}

	this.peek = function() {
		if(!first)
			return null;
		return first.data;
	}

	this.isEmpty = function() {
		if(!first)
			return true;
		return first;
	}
}

console.log("Create new queue");
var queue = new Queue();
console.log("Peek at queue");
console.log(queue.peek());
console.log("isEmpty");
console.log(queue.isEmpty());
console.log("Remove from queue");
console.log(queue.remove());
console.log("Add null value");
console.log(queue.add(null));
console.log("Add 5");
console.log(queue.add(5));
console.log("Remove from queue");
console.log(queue.remove());
console.log("Add 7");
console.log(queue.add(7));
console.log("Add 9");
console.log(queue.add(9));
console.log("Peek");
console.log(queue.peek());
console.log("Remove from queue");
console.log(queue.remove());
console.log("Peek");
console.log(queue.peek());








