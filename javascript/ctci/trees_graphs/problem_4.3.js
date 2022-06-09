// List of Depths
// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you’ll have D linked lists).

// O(n) Time
// O(n) Space
// Where n is number of nodes in the tree

const helpers = require('./helpers.js');

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function listOfDepths(tree) {
	let queue = [];
	let result = [];

	if (tree === null)
		return [];

	queue.push({
		node: tree,
		depth: 0
	});
	while (queue.length > 0) {
		let node = queue.shift();

		result[node.depth] = addToLinkedList(result[node.depth], node.node);

		if (node.node.right)
			queue.push({
				node: node.node.right,
				depth: node.depth + 1
			});
		if (node.node.left)
			queue.push({
				node: node.node.left,
				depth: node.depth + 1
			});
	}
	return result;
}

function addToLinkedList(head, treeNode) {
	let newNode = {
		data: treeNode.data,
		next: null
	}
	if (!head)
		return newNode;

	newNode.next = head;
	return newNode;
}

let head = new TreeNode(1);
let node = new TreeNode(2);
head.left = node;
node = new TreeNode(3);
head.right = node;
node = new TreeNode(4);
head.left.left = node;
node = new TreeNode(5);
head.left.right = node;
node = new TreeNode(6);
head.right.left = node;
node = new TreeNode(7);
head.right.right = node;

// console.assert(helpers.arrEqual(listOfDepths(null), []));
// console.log(listOfDepths(head));