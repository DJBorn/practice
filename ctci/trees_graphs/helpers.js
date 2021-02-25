
function treesEqual(tree1, tree2) {
    if(tree1 === null && tree2 === null)
        return true;
    
    return tree1.data === tree2.data && treesEqual(tree1.left, tree2.left) && treesEqual(tree1.right, tree2.right);
}

function treeInOrderArray(tree) {
    let stack = [];
    let result = [];

    while(stack.length > 0 || tree !== null) {
        if(tree !== null) {
            stack.push(tree);
            tree = tree.left;
            continue;
        }

        tree = stack.pop();
        result.push(tree.data);
        tree = tree.right;
    }

    return result;
}

function arrEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(let i in arr1) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

module.exports = {
    treesEqual,
    treeInOrderArray,
    arrEqual
}