var binaryTreeDistance = function(root, node1, node2) {
    // Set found pair flag
    var n1Found = false;
    var n2Found = false;
    // Helper function
    function findDistance(root, node1, node2) {
        // Return -1 if the node is null
        if(!root)
            return -1;
        // recurse through children
        var left = findDistance(root.left, node1, node2);
        var right = findDistance(root.right, node1, node2);
        // If the current node is one of the values then check if the other node was found in its descendants
        if(root.data === node1 || root.data === node2) {
            if(root.data === node1)
                n1Found = true;
            else
                n2Found = true;
            if(left > 0) {
                return left;
            }
            if(right > 0 ){
                return right;
            }
            return 1;
        }
        var add = 1;
        // If both descendants returned a value then this node is the LCA so return both distances
        if(left > 0 && right > 0) {
            return left + right;
        }
        // If the nodes were already found then stop adding additional distances going up the chain
        if(n1Found && n2Found)
            add = 0;
        // If either of its descendants has the found node, return the distance thus far
        if(left > 0)
            return left + add;
        if(right > 0)
            return right + add;
        return -1;
    }
    var distance = findDistance(root, node1, node2);
    if(n1Found && n2Found)
        return distance;
    if((n1Found || n2Found) && node1 === node2)
        return 0;
    return -1;
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

console.log(binaryTreeDistance(tree, 7, 6));
console.log(binaryTreeDistance(tree, 7, 3));
console.log(binaryTreeDistance(tree, 7, 1));
console.log(binaryTreeDistance(tree, 7, 8));
console.log(binaryTreeDistance(tree, 2, 4));
console.log(binaryTreeDistance(tree, 5, 8));
console.log(binaryTreeDistance(tree, 1, 1));
console.log(binaryTreeDistance(tree, 4, 4));
console.log(binaryTreeDistance(tree, 22, 22));
console.log(binaryTreeDistance(tree, 7, 12));