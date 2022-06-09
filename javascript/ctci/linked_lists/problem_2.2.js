// Return Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list.

var helpers = require('./helpers.js');

// O(n) Time
// O(1) Space
function returnKthToLast(head, k) {
    if(head == null)
        return head;
    
    // Create 2 nodes k apart. Once the ahead node reaches the end, the current node should be at kth to last.
    let curNode = head;
    let aheadNode = head;
    for(let i = 1; i < k; i++) {
        aheadNode = aheadNode.next;
    }

    while(aheadNode.next) {
        curNode = curNode.next;
        aheadNode = aheadNode.next;
    }
    return curNode.data;
}

console.assert(
    returnKthToLast(helpers.constructLLFromArr([1, 2, 3]), 1) == 
    3);

console.assert(
    returnKthToLast(helpers.constructLLFromArr([1, 2, 3]), 3) == 
    1);
    
console.assert(
    returnKthToLast(helpers.constructLLFromArr([]), 1) == 
    null);
    
console.assert(
    returnKthToLast(helpers.constructLLFromArr([1, 2, 3, 4]), 3) == 
    2);