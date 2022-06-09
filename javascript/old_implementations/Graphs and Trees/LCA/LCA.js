// Find the lowest common ancestor of two nodes in a binary tree
// O(n) Time
// O(n) Space

var LCA = function(root, n1, n2) {
    var n1Found = false, n2Found = false;

    function LCAHelper(root, n1, n2) {
        if(!root)
            return null;
        if(root.data === n1) {
            n1Found = true;
            return root;
        }
        if(root.data === n2) {
            n2Found = true;
            return root;
        }
    
        var left_LCA = LCAHelper(root.left, n1, n2);
        var right_LCA = LCAHelper(root.right, n1, n2);
    
        if(left_LCA && right_LCA)
            return root;
        return left_LCA ? left_LCA : right_LCA;
    }

    function find(root, val) {
        if(!root)
            return false;
        if(root.data === val)
            return true;
        return find(root.left, val) || find(root.right, val);
    }

    var LCA = LCAHelper(root, n1, n2);
    if(n1Found && n2Found || n1Found && find(root, n2) || n2Found && find(root, n1))
        return LCA;
    return null;
}

var tree = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 4,
            left: {
                data: 8,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            data: 5,
            left: null,
            right: null,
        }
    },
    right: {
        data: 3,
        left: {
            data: 6,
            left: null,
            right: null,
        },
        right: {
            data: 7,
            left: null,
            right: null
        }
    }
}

console.log(LCA(tree, 8, 5));
console.log(LCA(tree, 4, 8));
console.log(LCA(tree, 7, 8));
console.log(LCA(tree, 7, 9));