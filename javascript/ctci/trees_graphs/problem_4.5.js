// Validate BST
// Implement a function to check if a binary tree is a binary search tree

// O(n) Time
// O(k) Space
// n = # of nodes
// k = max height of tree

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function validateBST(head) {
	return validateBSTHelper(head, -Infinity, Infinity);
}

function validateBSTHelper(head, leftLimit, rightLimit) {
	if (head === null)
		return true;
	if (head.data <= leftLimit || rightLimit <= head.data)
		return false;
	return validateBSTHelper(head.left, leftLimit, head.data) &&
		validateBSTHelper(head.right, head.data, rightLimit);
}


console.assert(validateBST(null) === true);

let head = new TreeNode(100);
console.assert(validateBST(head) === true);

node = new TreeNode(50);
head.left = node;
console.assert(validateBST(head) === true);

node = new TreeNode(150);
head.right = node;
console.assert(validateBST(head) === true);

node = new TreeNode(200);
head.right.right = node;
console.assert(validateBST(head) === true);

node = new TreeNode(125);
head.right.left = node;
console.assert(validateBST(head) === true);

node = new TreeNode(75);
head.left.right = node;
console.assert(validateBST(head) === true);

node = new TreeNode(49);
head.left.right.left = node;
console.assert(validateBST(head) === false);

node = new TreeNode(76);
head.left.right.left = node;
console.assert(validateBST(head) === false);

node = new TreeNode(70);
head.left.right.left = node;
console.assert(validateBST(head) === true);

