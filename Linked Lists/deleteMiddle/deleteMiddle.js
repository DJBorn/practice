// Delete a node in the middle of the linked list given the node itself and not the head
// O(n) Time
// O(1) Space
// Optimal solution is O(1) time by setting the value of the given node to its child and make it point to its grandchild

var deleteMiddle = function(node) {
	if(typeof node != "object" || !node.hasOwnProperty("next") || !node.hasOwnProperty("data"))
		return false;

	while(node) {
		if(node.next){
			if(typeof node.next != "object" || !node.next.hasOwnProperty("next") || !node.next.hasOwnProperty("data"))
				return false;
			node.data = node.next.data;
		}
		node = node.next;
	}

	return true;
}

var list1 = {
	data: 5,
	next: {
		data: 3,
		next: {
			data: 12,
			next: null
		}
	}
}

console.log("Delete 3 in 5 -> 3 -> 12")
console.log(deleteMiddle(list1.next));
console.log(list1);
console.log("Pass in invalid integer 32");
console.log(deleteMiddle(32));