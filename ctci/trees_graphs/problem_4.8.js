// First Common Ancestor
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.


class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function firstCommonAncestor(head, nodeA, nodeB) {
	if (!nodeA || !nodeB)
		throw Error("Invalid input");
	let ans = null;

	function FCAHelper(head, nodeA, nodeB) {
		if (head === null)
			return false;

		const left = FCAHelper(head.left, nodeA, nodeB);
		const right = FCAHelper(head.right, nodeA, nodeB);
		const current = head === nodeA || head === nodeB;

		if ((left && right) || (left && current) || (right && current)) {
			ans = head;
			return true;
		}
		return left || right || current;
	}

	FCAHelper(head, nodeA, nodeB);
	return ans;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node4.left = node8;

console.assert(firstCommonAncestor(node1, node8, node5) === node2);
console.assert(firstCommonAncestor(node1, node8, node2) === node2);
console.assert(firstCommonAncestor(node1, node8, node7) === node1);
console.assert(firstCommonAncestor(node1, node1, node2) === node1);
console.assert(firstCommonAncestor(node1, node6, node7) === node3);