// Set of Stacks is a class that contains the same functionalities as a regular stack but utilizes multiple stacks with maximum capacities

var Stack = function () {
	var top = null;
	var size = 0;

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
		size++;
		return true;
	}

	this.pop = function() {
		if(!top)
			return null;
		var ret = top.data;
		top = top.next;
		size--;
		return ret;
	}

	this.size = function() {
		return size;
	}
}

var SetofStacks = function(cap = 10) {
	var capacity = cap;
	var stacks = [];
	var size = 0;

	this.push = function(value) {
		if(!value)
			return false;
		if(size == 0 || stacks[size-1].size() == capacity) {
			stacks.push(new Stack());
			stacks[0].push(value);
			size++;
		}
		else {
			stacks[size-1].push(value);
		}
		return true;
	}

	this.pop = function() {
		if(!size)
			return null;
		if(stacks[size-1].size() == 0)
			size--;
		return stacks[size-1].pop();
	}
}

console.log("Create set of stacks with capacity 2");
var sos = new SetofStacks(2);
console.log("Push 3");
console.log(sos.push(3));
console.log("Push 7");
console.log(sos.push(7));
console.log("Push 5");
console.log(sos.push(5));
console.log("Push 12");
console.log(sos.push(12));
console.log("Push 422")
console.log(sos.push(422));
console.log("Pop");
console.log(sos.pop());
console.log("Pop");
console.log(sos.pop());
console.log("Pop");
console.log(sos.pop());
console.log("Push 62");
console.log(sos.push(62));
console.log("Pop");
console.log(sos.pop());
console.log("Pop");
console.log(sos.pop());

