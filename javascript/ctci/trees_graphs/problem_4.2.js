// Minimal Tree
// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// O(n) Time
// O(log n) Space
// Where n is length of array

const helpers = require('./helpers.js');

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function minimalTree(arr) {
	return minimalTreeHelper(arr, 0, arr.length-1);
}

function minimalTreeHelper(arr, leftLimit, rightLimit) {
	if(rightLimit < leftLimit)
		return null;
	
	let middle = Math.ceil((leftLimit + rightLimit)/2);
	let newNode = new TreeNode(arr[middle]);
	
	newNode.left = minimalTreeHelper(arr, leftLimit, middle-1);
	newNode.right = minimalTreeHelper(arr, middle+1, rightLimit);

	return newNode;
}

console.assert(helpers.arrEqual(helpers.treeInOrderArray(minimalTree([1,2,3,4,5,6,7])), [1,2,3,4,5,6,7]));
console.assert(helpers.arrEqual(helpers.treeInOrderArray(minimalTree([1,2,3,4,5,6])), [1,2,3,4,5,6]));
console.assert(helpers.arrEqual(helpers.treeInOrderArray(minimalTree([1])), [1]));
console.assert(helpers.arrEqual(helpers.treeInOrderArray(minimalTree([])), []));