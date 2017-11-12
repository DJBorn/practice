// Find the kth smallest number in a BST
// O(n) Time
// O(n) Space

var kthSmallestInBST = function(root, k) {
    function findKthSmallest(root) {
        if(!root || k < 0)
            return null;
        var left = findKthSmallest(root.left);
        if(left)
            return left;
        k--;
        if(k === 0)
            return root.data;
        return findKthSmallest(root.right);
    }
    return findKthSmallest(root);
}

var tree = {
    data: 10,
    left: {
        data: 5,
        left: {
            data: 3
        },
        right: {
            data: 8
        }
    },
    right: {
        data: 15,
        left: {
            data: 13
        },
        right: {
            data: 18
        }
    }
}

console.log(kthSmallestInBST(tree, 1));