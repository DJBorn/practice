// Random Node
// You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.

// O(D) Time
// O(D) Space
// Where D is the max depth of the tree
class RandomTree {
	constructor() {
		this.root = null;
	}

	getRandomNode() {
		if (!this.root)
			throw new Error("Cannot get random node of an empty tree");
		return selectRandomNode(this.root);
		function selectRandomNode(node) {
			if (node.totalNodes === 1)
				return node.data;
			let chance = Math.floor(Math.random() * node.totalNodes);
			if (chance === 0)
				return node.data;
			chance = Math.floor(Math.random() * (node.totalNodes - 1));
			if (node.left && chance < node.left.totalNodes)
				return selectRandomNode(node.left);
			return selectRandomNode(node.right);
		}
	}

	insert(data) {
		const node = new TreeNode(data);
		let curNode = this.root;
		let parent = null;
		if (!curNode)
			this.root = node;
		else {
			while (curNode) {
				parent = curNode;
				curNode.totalNodes++;
				if (node.data < curNode.data)
					curNode = curNode.left
				else
					curNode = curNode.right
			}
			if (node.data < parent.data)
				parent.left = node;
			else
				parent.right = node;
		}
	}

	delete(data) {
		this.root = deleteNode(this.root, data);
		function deleteNode(node, data) {
			if (!node)
				return null;
			if (node.data === data) {
				if (!node.left && !node.right)
					return null;
				if (!node.left)
					return node.right;
				if (!node.right)
					return node.left;
				let nextNode = findLeftMostNode(node.right);
				node.data = nextNode.data;
				node.totalNodes--;
				node.right = deleteNode(node.right, nextNode.data);
				return node;
			} else if (data < node.data) {
				node.left = deleteNode(node.left, data);
				return node;
			} else {
				node.right = deleteNode(node.right, data);
				return node;
			}
		}
		function findLeftMostNode(node) {
			while (node.left) {
				node.totalNodes--;
				node = node.left;
			}
			return node;
		}
	}

	find(data) {
		let curNode = this.root;
		while (curNode && curNode.data !== data) {
			if (data < curNode.data)
				curNode = curNode.left;
			else
				curNode = curNode.right;
		}
		return curNode;
	}
}

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.totalNodes = 1;
	}
}


let root = new RandomTree();

root.insert(3);
root.insert(1);
root.insert(7);
root.insert(5);
root.insert(8);
root.insert(6);
root.insert(2);
root.insert(4);

let result = [0,0,0,0,0,0,0,0,0];

for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(3);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(4);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(5);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(6);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(7);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(8);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);

result = [0,0,0,0,0,0,0,0,0];
root.delete(1);
for(let i = 0; i < 1000000; i++) {
	result[root.getRandomNode()]++;
}
console.log(result);