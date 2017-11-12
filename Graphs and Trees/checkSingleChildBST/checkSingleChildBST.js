// Given a preorder traversal array of a BST, check if every node has at most one child
// O(n) Time
// O(1) Space

var checkSingleChildBST = function(arr) {
    var max = Infinity, min = -Infinity;
    for(let i = 0; i < arr.length; i++) { 
        if(min > arr[i] || arr[i] > max)
            return false;
        if(i+1 < arr.length) {
            if(arr[i+1] <= arr[i])
                max = arr[i];
            else
                min = arr[i];
        }
    }
    return true;
}

console.log("checkSingleChildBST([8, 3, 5, 7, 6])")
console.log(checkSingleChildBST([8, 3, 5, 7, 6]));
console.log("checkSingleChildBST([20, 10, 11, 13, 12])")
console.log(checkSingleChildBST([20, 10, 11, 13, 12]));
console.log("checkSingleChildBST([20, 30, 40, 50, 60, 70, 59])")
console.log(checkSingleChildBST([20, 30, 40, 50, 60, 70, 59]));
console.log("checkSingleChildBST([5, 3, 1, 4])")
console.log(checkSingleChildBST([5, 3, 1, 4]));
console.log("checkSingleChildBST([5, 3, 1, 2])")
console.log(checkSingleChildBST([5, 3, 1, 2]));