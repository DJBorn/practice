// Singly Linked List implementation in JavaScript which can:
// - Insert to the end
// - Delete element
// - Check if an element exists in the list

var LinkedList = function() {
	var head = null;

	this.insert = function(element) {
		if(element == null)
			return -1;

		if(head == null) {
			head = {
				data: element,
				next: null
			}
		}
		else {
			var curr = head;
			while(curr.next != null)
				curr = curr.next;
			curr.next = {
				data: element,
				next: null
			}
		}
		return element;
	}

	this.delete = function(element) {
		if(element == null)
			return -1;

		var curr = head;
		var prev = null;
		while(curr != null) {
			if(curr.data == element) {
				if(prev == null) {
					head = curr.next;
				}
				else {
					prev.next = curr.next;
				}
				return element;
			}
			prev = curr;
			curr = curr.next;
		}
	}

	this.exists = function(element) {
		if(element == null)
			return -1;
		var curr = head;
		while(curr != null) {
			if(curr.data == element) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}
}

console.log("Create new linked list");
var LL = new LinkedList()

console.log("Insert null");
console.log(LL.insert(null));
console.log("Delete null");
console.log(LL.delete(null));
console.log("Check if null exists");
console.log(LL.exists(null));
console.log("Insert 1");
console.log(LL.insert(1));
console.log("Insert 3");
console.log(LL.insert(3));
console.log("Check if 3 exists");
console.log(LL.exists(3));
console.log("Check if 4 exists");
console.log(LL.exists(4));
console.log("Delete 3");
console.log(LL.delete(3));
console.log("Check if 3 exists");
console.log(LL.exists(3));
console.log("Delete 1");
console.log(LL.delete(1));
console.log("Check if 1 exists");
console.log(LL.exists(1));
console.log("Delete 4");
console.log(LL.delete(4));


