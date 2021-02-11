// Intersection
// Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

var helpers = require('./helpers.js');

// O(n) Time
// O(1) Space
function intersection(head1, head2) {
	// O(n + m)
	let head1Length = findLinkedListLength(head1);
	let head2Length = findLinkedListLength(head2);

	let difference = Math.abs(head1Length - head2Length);
	
	// O(max(n, m))
	if(head1Length > head2Length)
		head1 = traverseNodes(head1, difference);
	else
		head2 = traverseNodes(head2, difference);
	// O(min(n, m))
	return getIntersectingNode(head1, head2);
}

function findLinkedListLength(head) {
	let size = 0;
	while (head) {
		head = head.next;
		size++;
	}
	return size;
}

function traverseNodes(head, n) {
	while(n > 0 && head) {
		head = head.next;
		n--;
	}
	return head;
}

function getIntersectingNode(head1, head2) {
	while(head1 != head2) {
		head1 = head1.next;
		head2 = head2.next;
	}
	return head1;
}

let head1, head2;

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = {
    data: 1,
    next: head1.next.next
}

console.assert(intersection(head1, head2) === head1.next.next);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = {
    data: 1,
    next: head1.next.next.next
}

console.assert(intersection(head2, head1) === head1.next.next.next);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = {
    data: 1,
    next: head1
}

console.assert(intersection(head2, head1) === head1);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
console.assert(intersection(head2, head1) === null);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = helpers.constructLLFromArr([1, 2, 3, 5]);
console.assert(intersection(head2, head1) === null);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = helpers.constructLLFromArr([1, 2, 3, 5]);
console.assert(intersection(head1, head2) === null);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = helpers.constructLLFromArr([]);
console.assert(intersection(head1, head2) === null);

head1 = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
head2 = helpers.constructLLFromArr([]);
console.assert(intersection(head2, head1) === null);