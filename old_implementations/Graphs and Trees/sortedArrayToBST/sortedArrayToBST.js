// Sorted Array to balanced BST
// O(n) Time
// O(1) Space

var sortedArrayToBST = function(arr) {
    function createNode(low, high) {
        if(low > high) {
            return null;
        }
        var middle = Math.floor((high + low)/2);
        var node = {
            data: arr[middle],
            left: createNode(low, middle-1),
            right: createNode(middle+1, high)
        }
        return node;
    }

    return createNode(0, arr.length-1);
}

console.log("[1] to BST:");
console.log(sortedArrayToBST([1]));
console.log("[1, 2] to BST:");
console.log(sortedArrayToBST([1, 2]));
console.log("[1, 2, 3] to BST:");
console.log(sortedArrayToBST([1, 2, 3]));
console.log("[1, 2, 3, 4] to BST:");
console.log(sortedArrayToBST([1, 2, 3,4]));
console.log("[1, 2, 3, 4, 5, 6, 7] to BST:");
console.log(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]));