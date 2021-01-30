class BST {
    constructor() {
        this.root = null;
    }

    // Average Case O(log n)
    insert(val) {
        // Input should be a number
        if(typeof val != "number")
            return -1;
        
        let newNode = {
            value: val,
            left: null,
            right: null
        }

        if(this.root == null)
            this.root = newNode;

        else {
            insertNode(this.root, newNode);
        }

        // Helper Function
        function insertNode(curNode, node) {
            if(curNode.value == node.value)
                return;
            if(node.value < curNode.value) {
                if(curNode.left == null) {
                    curNode.left = node;
                    return;
                }
                insertNode(curNode.left, node);
            }
            else {
                if(curNode.right == null) {
                    curNode.right = node;
                    return;
                }
                insertNode(curNode.right, node);
            }
        }
    }

    // Average Case O(log n)
    delete(val) {
        // Input should be a number
        if(typeof val != "number")
            return -1;

        deleteNode(this.root, val);

        // Delete helper function
        function deleteNode(node, val) {
            // Check base case
            if(node == null)
                return null;
            
            if(val < node.value) {
                node.left = deleteNode(node.left, val);
                return node;
            }

            if(val > node.value) {
                node.right = deleteNode(node.right, val);
                return node;
            }

            // Current node is target node. Delete it
            
            // If current node has no children, then return null
            if(node.left == null && node.right == null)
                return null;
            
            // If it only has one child, return it
            if(node.right == null)
                return node.left;
            
            if(node.left == null)
                return node.right;

            // If it has two children, find its in order successor and replace its value and delete it
            let successor = findInOrderSuccessor(node);
            node.value = successor.value;
            node.right = deleteNode(node.right, successor.value);

            // Return new node
            return node;
        }
        
        // Helper function
        function findInOrderSuccessor(node) {
            if(!node)
                return null;
            let curNode = node.right;
            while(curNode.left)
                curNode = curNode.left;
            return curNode;
        }
    }

    // Average Case O(log n)
    search(val) {
        // Input should be a number
        if(typeof val != "number")
            return -1;
        
        // Check base case
        if(this.root == null)
            return false;
        
        let curNode = this.root;
        while(curNode) {
            if(curNode.value == val)
                return true;
            if(val < curNode.value)
                curNode = curNode.left;
            else
                curNode = curNode.right;
        }
        return false;
    }
}

let bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(7);
bst.insert(10);
console.assert(bst.search(3));
console.assert(bst.search(5));
console.assert(bst.search(9));
console.assert(bst.search(8));
console.assert(bst.search(7));
console.assert(bst.search(2) == false);
bst.delete(9);
console.assert(bst.search(9) == false);
bst.delete(5);
console.assert(bst.search(5) == false);
bst.delete(7);
console.assert(bst.search(7) == false);
bst.delete(9);
console.assert(bst.search(9) == false);