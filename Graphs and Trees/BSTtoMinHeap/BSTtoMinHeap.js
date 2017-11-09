// Convert binary search tree to min heap
// O(n) Time
// O(n) Space
var BSTtoMinHeap = function(root) {
    var arr = [];
    var index = 0;
    
    function convertToArray(root) {
        if(!root)
            return;
        convertToArray(root.left);
        arr.push(root.data);
        convertToArray(root.right);
    }

    function preorderInsert(root) {
        if(!root)
            return;
        root.data = arr[index++];
        preorderInsert(root.left);
        preorderInsert(root.right);
    }

    convertToArray(root);
    preorderInsert(root);

    return root;
}

var tree = {
    data: 10,
    left: {
        data: 5,
        left: {
            data: 3
        },
        right: {
            data: 7
        }
    },
    right: {
        data: 15,
        left: {
            data: 13
        },
        right: {
            data: 17
        }
    }
};

console.log(BSTtoMinHeap(tree));