// Delete Middle Node
// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

var helpers = require('./helpers.js');

// O(1) Time
// O(1) Space
function deleteMiddleNode(node) {
    if(node == null)
        return false;
    
    node.data = node.next.data;
    node.next = node.next.next;
    return true;
}

let head = helpers.constructLLFromArr([1, 2, 3, 4, 5]);
let middle = head.next.next.next;

deleteMiddleNode(middle);
console.assert(
    helpers.compareLL(
        head, 
        helpers.constructLLFromArr([1, 2, 3, 5])) == 
    true);

middle = head.next;
deleteMiddleNode(middle);
console.assert(
    helpers.compareLL(
        head, 
        helpers.constructLLFromArr([1, 3, 5])) == 
    true);
