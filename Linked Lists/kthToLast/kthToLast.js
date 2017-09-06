// Find the kth element from the last in a singly linked list 
// E.g. k = 1 would return the last element
// O(n) Time
// O(1) Space

var kthToLast = function(head, k) {
	if(typeof k != "number" || k < 1)
		return null;

	var runner = head;
	for(var i = 0; i < k; i++) {
		if(!runner || typeof runner != 'object' || !runner.hasOwnProperty('data') || !runner.hasOwnProperty('next'))
			return null;
		runner = runner.next;
	}

	while(runner) {
		runner = runner.next;
		head = head.next;
	}
	return head.data;
}

console.log("Create list 8 -> 1 -> 3")
var list1 = {
	data: 8,
	next: {
		data: 1,
		next: {
			data: 3,
			next: null
		}
	}
}

console.log("Find k = 0");
console.log(kthToLast(list1, 0));
console.log("Find k = 1");
console.log(kthToLast(list1, 1));
console.log("Find k = 3");
console.log(kthToLast(list1, 3));
console.log("Find k = 4");
console.log(kthToLast(list1, 4));
console.log("null list");
console.log(kthToLast(null, 4));
console.log("empty object");
console.log(kthToLast({}, 4));