var BST = function() {
	var root = null;
}

BST.prototype.insert = function(value) {
	if(!value)
		return false;

	var node = {
		data: value,
		left: null,
		right: null
	};

	if(!this.root)
		this.root = node;
	else {
		var curNode = this.root;
		while(1) {
			if(value <= curNode.data) {
				if(!curNode.left) {
					curNode.left = node;
					break;
				}
				curNode = curNode.left;
			}
			else {
				if(!curNode.right) {
					curNode.right = node;
					break;
				}
				curNode = curNode.right;
			}
		}
	}
	return true;
}

BST.prototype.find = function(value) {
	if(!value)
		return null;

	if(!this.root)
		return false;
	var curNode = this.root;
	while(1) {
		if(curNode == null)
			return false;
		else if(value == curNode.data)
			return true;
		else if (value <= curNode.data)
			curNode = curNode.left;
		else
			curNode = curNode.right;
	}
}

var bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(7);
console.log(bst);
console.log(bst.find(3));
console.log(bst.find(5));
console.log(bst.find(9));
console.log(bst.find(8));
console.log(bst.find(7));
console.log(bst.find(2));