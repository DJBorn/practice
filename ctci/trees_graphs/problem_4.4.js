// Check Balanced
// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

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

function checkBalanced(head) {
	if(!head)
		return true;

	return calculateBalancedHeight(head) >= 0;
}

function calculateBalancedHeight(head) {
	if(head === null)
		return 0;
	
	const leftHeight = calculateBalancedHeight(head.left);
	const rightHeight = calculateBalancedHeight(head.right);
	let height = Math.max(Math.abs(leftHeight), Math.abs(rightHeight)) + 1;
	
	const difference = Math.abs(Math.abs(leftHeight) - Math.abs(rightHeight));

	return leftHeight < 0 || rightHeight < 0 || difference > 1 ? height * -1 : height;
}

console.assert(checkBalanced(null) === true);

let head = new TreeNode(1);
console.assert(checkBalanced(head) === true);

let node = new TreeNode(2);
head.left = node;
console.assert(checkBalanced(head) === true);

node = new TreeNode(3);
head.left.left = node;
console.assert(checkBalanced(head) === false);

node = new TreeNode(4);
head.right = node;
console.assert(checkBalanced(head) === true);

node = new TreeNode(5);
head.right.left = node;
console.assert(checkBalanced(head) === true);

node = new TreeNode(6);
head.left.left.left = node;
console.assert(checkBalanced(head) === false);

node = new TreeNode(7);
head.left.right = node;
console.assert(checkBalanced(head) === true);