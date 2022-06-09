// Successor
// Write an algorithm to find the “next” node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.

// O(n) Time
// O(k) Space
// n = # of nodes
// k = max height of tree

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.parent = null;
	}
}

function successor(node) {
	if (node === null)
		return null;
	if (node.right === null)
		return findLeftmostParent(node);

	return findLeftmostChild(node.right);
}

function findLeftmostChild(node) {
	while (node.left) {
		node = node.left;
	}
	return node;
}

function findLeftmostParent(node) {
	while (node.parent) {
		const prevNode = node;
		node = node.parent;
		if (node.left === prevNode)
			return node;
	}
	return null;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8);

node4.left = node2;
node2.parent = node4;
node4.right = node6;
node6.parent = node4;
node2.left = node1;
node1.parent = node2;
node2.right = node3;
node3.parent = node2;
node6.left = node5;
node5.parent = node6;
node6.right = node7;
node7.parent = node6;
node8.parent = node3;
node3.right = node8;


console.assert(successor(node1) === node2);
console.assert(successor(node2) === node3);
console.assert(successor(node3) === node8);
console.assert(successor(node8) === node4);
console.assert(successor(node4) === node5);
console.assert(successor(node5) === node6);
console.assert(successor(node6) === node7);