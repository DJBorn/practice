// Check Subtree
// T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.
// A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.

// O(n + m) Time
// O(n + m) Space
class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function checkSubtree(headA, headB) {
	let treeAInOrder = getInOrderArray(headA).join('');
	let treeBInOrder = getInOrderArray(headB).join('');

	return treeAInOrder.indexOf(treeBInOrder) >= 0;
}

function getInOrderArray(head) {
	ans = [];
	function inOrderRecurse(head) {
		if(head === null) {
			ans.push("X");
			return;
}
		ans.push("#" + head.data);
		inOrderRecurse(head.left);
		inOrderRecurse(head.right);
	}
	inOrderRecurse(head);
	return ans;
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

console.assert(checkSubtree(node1, node2) === true);
console.assert(checkSubtree(node1, node3) === true);
console.assert(checkSubtree(node1, node4) === true);
console.assert(checkSubtree(node1, node5) === true);
console.assert(checkSubtree(node1, node6) === true);
console.assert(checkSubtree(node1, node7) === true);
console.assert(checkSubtree(node1, node8) === true);
console.assert(checkSubtree(node2, node1) === false);