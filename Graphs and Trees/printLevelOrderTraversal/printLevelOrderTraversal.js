// Print the level order traversal of a binary tree such that all levels are printed on separate lines
// O(n) Time
// O(n) Space
var printLevelOrderTraversal = function(root) {
    var level = 0;
    var queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        var output = "";
        var queueLength = queue.length;
        for(let i = 0; i < queueLength; i++) {
            var curNode = queue.shift();
            output += curNode.data + " ";
            if(curNode.left)
                queue.push(curNode.left);
            if(curNode.right)
                queue.push(curNode.right);
        }
        console.log(output);
    }
}

var tree = {
    data: 1,
    left: {
        data:2,
        left: {
            data: 4,
            left: null,
            right: null
        },
        right: {
            data: 5,
            left: null,
            right: null
        }
    },
    right: {
        data: 3,
        left: {
            data: 6,
            left: null,
            right: null
        },
        right: null
    }
}

printLevelOrderTraversal(tree);