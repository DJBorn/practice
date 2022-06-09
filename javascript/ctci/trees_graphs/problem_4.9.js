// BST Sequences
// A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class LinkedList {
	constructor(data) {
		if (data !== undefined) {
			this.head = {
				data: data,
				next: null,
				previous: null
			}
			this.tail = this.head;
			this.length = 1;
		} else {
			this.head = null;
			this.tail = null;
			this.length = 0;
		}
	}
	pushHead(data) {
		let newNode = {
			data: data,
			next: null,
			previous: null
		}
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.previous = newNode;
			this.head = newNode;
		}
		this.length++;
	}
	appendTail(data) {
		let newNode = {
			data: data,
			next: null,
			previous: null
		}
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.previous = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	removeHead() {
		if (this.head === null)
			throw new Error("Cannot remove head of empty LinkedList");
		this.head = this.head.next;
		if (this.head === null)
			this.tail = null;
		else
			this.head.previous = null;
		this.length--;
	}
	removeTail() {
		if (this.tail === null)
			throw new Error("Cannot remove tail of empty LinkedList");
		this.tail = this.tail.previous;
		if(this.tail === null)
			this.head = null;
		else
			this.tail.next = null;
		this.length--;
	}
	appendList(linkedList) {
		this.tail.next = linkedList.head;
		this.tail = linkedList.tail;
		this.length += linkedList.length;
	}
}

function BSTSequences(head) {
	let result = [];
	if (head === null)
		return [new LinkedList()];
	if (head.left === null && head.right === null)
		return [new LinkedList(head.data)];

	// Generate all possible combinations of the left subtree and right sub tree
	let leftSequences = BSTSequences(head.left);
	let rightSequences = BSTSequences(head.right);

	// For every combination of the left tree, "weave" the list with every combination of the right tree with the current node's data as a prefix
	for (let leftList of leftSequences) {
		for (let rightList of rightSequences) {
			result = result.concat(weave(leftList, rightList, new LinkedList(head.data)));
		}
	}
	return result;
}

function weave(aList, bList, prefix) {
	// If there is nothing left to choose from one list, use the remainder of the other list with the given prefix
	if (aList.length === 0) {
		let clone = cloneLinkedList(prefix);
		clone.appendList(bList);
		return [clone];
	}
	if (bList.length === 0) {
		let clone = cloneLinkedList(prefix);
		clone.appendList(aList);
		return [clone];
	}

	// Take the first value from the first list, recursively call, and restore the same value
	// Also add the same value to the end of the prefix, but then remove it once finished recursing
	let aHeadData = aList.head.data;
	aList.removeHead();
	prefix.appendTail(aHeadData);
	let pickA = weave(aList, bList, prefix);
	aList.pushHead(aHeadData);
	prefix.removeTail();

	let bHeadData = bList.head.data;
	bList.removeHead();
	prefix.appendTail(bHeadData);
	let pickB = weave(aList, bList, prefix);
	bList.pushHead(bHeadData);
	prefix.removeTail();

	return pickA.concat(pickB);
}

function cloneLinkedList(list) {
	let curNode = list.head;
	let clone = new LinkedList();
	while(curNode) {
		clone.appendTail(curNode.data);
		curNode = curNode.next;
	}
	return clone;
}

let node1 = new TreeNode(9);
let node2 = new TreeNode(6);
let node3 = new TreeNode(12);
let node4 = new TreeNode(3);
let node5 = new TreeNode(7);
let node6 = new TreeNode(11);
let node7 = new TreeNode(14);
let node8 = new TreeNode(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node4.left = node8;

let ans = BSTSequences(node1);
for(let list of ans) {
	console.log(convertLinkedListToArray(list));
}

function convertLinkedListToArray(list) {
	let result = [];
	let curNode = list.head;
	while(curNode) {
		result.push(curNode.data);
		curNode = curNode.next;
	}
	return result;
}
