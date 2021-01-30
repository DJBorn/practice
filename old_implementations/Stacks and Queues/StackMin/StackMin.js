// Stack data structure to keep track of the minimum value

var StackMin = function() {
	var top = null;
	var min = null;

	this.push = function(value) {
		if(!value)
			return false;

		var node = {
			data: value,
			next: null
		};

		if(!top) {
			top = node;
			min = JSON.parse(JSON.stringify(node));
		}
		else {
			if(value <= min.data) {
				var newMin = JSON.parse(JSON.stringify(node));
				newMin.next = min;
				min = newMin;
			}
			node.next = top;
			top = node;
		}
		return true;
	}

	this.pop = function () {
		if(!top)
			return null;
		if(top.data == min.data) {
			min = min.next;
		}
		var ret = top.data;
		top = top.next;
		return ret;
	}

	this.min = function() {
		if(!min)
			return null;
		return min.data;
	}
}

console.log("Create new stack");
var stack = new StackMin();
console.log("Push null");
console.log(stack.push(null));
console.log("Pop");
console.log(stack.pop());
console.log("Get min");
console.log(stack.min());
console.log("Push 5 6 5 4");
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(5));
console.log(stack.push(4));
console.log("Get min");
console.log(stack.min());
console.log("Pop");
console.log(stack.pop());
console.log("Get min");
console.log(stack.min());
console.log("Pop");
console.log(stack.pop());
console.log("Get min");
console.log(stack.min());