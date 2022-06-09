// Morris Inorder traversal of BST
// O(n) Time
// O(1) Space
var morrisTraversal = function(root) {
    var current = root;
    var output = "";

    // Find the rightmost node in the left subtree
    function findPredecessor(node) {
        var current = node.left;
        while(current.right) {
            // If the node is already linked then it has been traversed so remove link and return false
            if(current.right === node) {
                current.right = null;
                return false;
            }
            current = current.right;
        }
        current.right = node;
        return true;
    }

    while(current) {
        // Find and link predecessor. If it is already linked then remove link and print current
        if(current.left && findPredecessor(current))
            current = current.left;
        else {
            output += current.data + " ";
            current = current.right;
        }
    }
    return output;
}

var tree = {
    data: 50,
    left: {
        data: 25,
        left: {
            data: 13,
            right: {
                data: 18,
                left: {
                    data: 15
                }
            }
        },
        right: {
            data: 30
        }
    },
    right: {
        data: 70,
        left: {
            data: 60,
            right: {
                data: 65
            }
        }
    }
};

console.log(morrisTraversal(tree));