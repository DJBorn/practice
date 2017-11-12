// Construct a BST given an array of its level order traversal
// O(n) Time
// O(n) Space

var constructLevelOrderBST = function(arr) {
    if(arr.length === 0)
        return null;

    // First create the root
    var root = {
        data: arr[0],
    };

    // Create a queue that holds min and max values
    var queue = [];
    queue.push({
        node: root,
        min: -Infinity,
        max: Infinity
    });
    arr.splice(0, 1);

    // Perform BFS
    while(arr.length > 0) {
        var curNode = queue[0];
        queue.splice(0, 1);

        // Check if the next element in the array can be the left child
        if(arr[0] <= curNode.node.data && arr[0] > curNode.min) {
            curNode.node.left = {
                data: arr[0]
            };
            arr.splice(0, 1);
            // Push this child into the queue with the new max being its parent's value
            queue.push({
                node: curNode.node.left,
                min: curNode.min,
                max: curNode.node.data
            });
        }
        if(arr.length > 0) {
            // Same procedure for right child
            if(arr[0] > curNode.node.data && arr[0] < curNode.max) {
                curNode.node.right = {
                    data: arr[0]
                };
                arr.splice(0, 1);
                queue.push({
                    node: curNode.node.right,
                    min: curNode.node.data,
                    max: curNode.max
                });
            }
        }
    }

    return root;
}

console.log("Construct BST from [7,4,12,3,6,8,1,5,10]")
console.log(constructLevelOrderBST([7,4,12,3,6,8,1,5,10]));
console.log("Construct BST from [1]")
console.log(constructLevelOrderBST([1]));
console.log("Construct BST from [1,2]")
console.log(constructLevelOrderBST([1,2]));
console.log("Construct BST from [1,2,3]")
console.log(constructLevelOrderBST([1,2,3]));
console.log("Construct BST from [10,9,20,8,19,7,18]")
console.log(constructLevelOrderBST([10,9,20,8,19,7,18]));
console.log("Construct BST from []")
console.log(constructLevelOrderBST([]));