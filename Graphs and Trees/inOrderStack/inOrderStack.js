// Print in order traversal of binary tree using a stack
// O(n) Time
// O(n) Space
var inOrderStack = function(root) {
    var stack = [];
    var output = "";
    var curNode = root;

    function pushNodes(current) {
        while(current) {
            stack.push(current);
            current = current.left;
        }
    }
    while(curNode || stack.length > 0) {
        if(curNode)
            pushNodes(curNode);
        curNode = stack.pop();
        output += curNode.data + " ";
        curNode = curNode.right;
    }
    return output;
}


var tree = {
    data: 5,
    left: {
        data:3,
        left: {
            data: 1,
            left: null,
            right: null
        },
        right: {
            data: 4,
            left: null,
            right: null
        }
    },
    right: {
        data: 7,
        left: {
            data: 6,
            left: null,
            right: null
        },
        right: {
            data: 8,
            left: null,
            right: {
                data: 9,
                left: null,
                right: null
            }
        }
    }
}

console.log(inOrderStack(tree));
console.log(inOrderStack(null));