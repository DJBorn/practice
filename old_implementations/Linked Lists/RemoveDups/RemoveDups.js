// Remove duplicated in an linked list
// O(n) Time
// O(n) Space
var removeDups = function(head) {
	var seen = {};
	var curr = head;
	prev = null;
	while(curr) {
		if(typeof curr != 'object' || !curr.hasOwnProperty('data') || !curr.hasOwnProperty('next'))
			return -1;
		if(seen[curr.data])
			prev.next = curr.next;
		else {
			prev = curr;
			seen[curr.data] = true;
		}
		curr = curr.next;
	}
}

var list1 = {
	data: 5,
	next: {
		data: 4,
		next: {
			data: 5,
			next: {
				data: 3,
				next: {
					data: 4,
					next: null
				}
			}
		}
	}
}

var list2 = {
	data: 5,
	next: {
		data: 4,
		next: null
	}
}

console.log(removeDups(list1));
console.log(list1);
console.log(removeDups(list2));
console.log(list2);