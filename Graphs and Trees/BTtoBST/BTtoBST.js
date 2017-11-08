// Convert a binary tree to a binary search tree maintaining tree structure
// O(nlogn) Time
// O(n) Space

var BTtoBST = function(root) {
    var arr = [];
    var curIndex = 0;

    // Put tree into array
    function convertToArray(root) {
        if(!root)
            return;
        convertToArray(root.left);
        arr.push(root.data);
        convertToArray(root.right);
    }

    // Construct sorted array through in order traversal of original tree
    function constructBST(root) {
        if(!root)
            return;
        constructBST(root.left);
        root.data = arr[curIndex++];
        constructBST(root.right);
    }

    convertToArray(root);

    // Sort the array
    arr.sort(function(a, b){return a-b;});

    constructBST(root);
    return root;
}


var tree = {
    data: 10,
    left: {
        data: 2,
        left: {
            data: 8
        },
        right: {
            data:4
        }
    },
    right: {
        data: 7
    }
};

var tree2 = {
    data: 10,
    left: {
        data: 30,
        left: {
            data: 20
        }
    },
    right: {
        data: 15,
        right: {
            data: 5
        }
    }
};

console.log(BTtoBST(tree));
console.log(BTtoBST(tree2));