// Insert into a ascending linked list, maintaining order

var head = {
	data: 2,
	next: {
		data: 5,
		next: {
			data: 8,
			next: null
		}
	}
};

function printList(head) {
	var cur = head;
	var print = "";
	while(cur != null) {
		print += " -> " + cur.data;
		cur = cur.next;
	}
	console.log(print);
}

function insert(head, n) {
	var cur = head;
	if(cur == null)
		return {
			data: n,
			next: null
		}
	if(n <= cur.data)
		return {
			data: n,
			next: cur
		}
	while(cur.next != null && n > cur.next.data) {
		cur = cur.next;
	}
	cur.next = {
		data: n,
		next: cur.next
	}
	return head;
}

printList(head);
head = insert(head, 1);
printList(head);
head = insert(head, 3);
printList(head);
head = insert(head, 6);
printList(head);
head = insert(head, 9);
printList(head);
