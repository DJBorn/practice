// Paths with Sum
// You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// O(n) Time
// O(n) Space
// Where n is the total number of nodes
class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function pathsWithSum(root, value) {
	let sumOccurrences = { 0: 1 };
	let count = 0;

	findPaths(root, 0);
	return count;

	function findPaths(node, sumSoFar) {
		if (!node)
			return;
		sumSoFar += node.data;
		// If there was a sum we found before where sum = sumSoFar - value then value = sumSoFar - sum (I.e. we can take the sum of all values AFTER the past sum to get our target)
		if (sumOccurrences[sumSoFar - value])
			// We increment the total # of times we've seen that sum. As we can take all sum values after each of those points to create unique sub arrays
			count += sumOccurrences[sumSoFar - value];
		if (!sumOccurrences[sumSoFar])
			sumOccurrences[sumSoFar] = 0;
		sumOccurrences[sumSoFar]++;
		// Add current sum to hash in case we run into a # that is this sum + value

		// recurse on left and right children
		findPaths(node.left, sumSoFar);
		findPaths(node.right, sumSoFar);

		// Before backtracking, decrement the sum count up to this point
		sumOccurrences[sumSoFar]--;
	}
}

let node1 = new TreeNode(9);
let node2 = new TreeNode(-9);
let node3 = new TreeNode(0);
let node4 = new TreeNode(9);
let node5 = new TreeNode(1);
let node6 = new TreeNode(0);
let node7 = new TreeNode(-9);
let node8 = new TreeNode(8);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.right = node8;

console.assert(pathsWithSum(node1, 9) === 7);
console.assert(pathsWithSum(node1, 8) === 1);
console.assert(pathsWithSum(node1, 0) === 7);