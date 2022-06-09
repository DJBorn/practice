// Remove Dups
// Write code to remove duplicates from an unsorted linked list

var helpers = require('./helpers.js');

// O(n) Time
// O(n) Space
function removeDups(head) {
    if(head == null)
        return head;
    
    let seenValues = {};
    let curNode = head;
    let prevNode;

    // Process current node
    while(curNode != null) {
        // remove it
        if(seenValues[curNode.data] == 1)
            prevNode.next = curNode.next;
        // or move on
        else {
            prevNode = curNode;
            seenValues[curNode.data] = 1;
        }
        curNode = curNode.next;
    }
    return head;
}

console.assert(removeDups(helpers.compareLL(
    removeDups(helpers.constructLLFromArr([1, 2, 3])),
    helpers.constructLLFromArr([1, 2, 3])
)) == true);

console.assert(removeDups(helpers.compareLL(
    removeDups(helpers.constructLLFromArr([1, 2, 1])),
    helpers.constructLLFromArr([1, 2])
)) == true);

console.assert(removeDups(helpers.compareLL(
    removeDups(helpers.constructLLFromArr([1, 2, 1, 3, 2, 3, 1, 1, 3, 4])),
    helpers.constructLLFromArr([1, 2, 3, 4])
)) == true);

console.assert(removeDups(helpers.compareLL(
    removeDups(helpers.constructLLFromArr([])),
    helpers.constructLLFromArr([])
)) == true);

console.assert(removeDups(helpers.compareLL(
    removeDups(helpers.constructLLFromArr([1])),
    helpers.constructLLFromArr([1])
)) == true);

console.assert(removeDups(helpers.compareLL(
    removeDups(helpers.constructLLFromArr([1, 1, 1])),
    helpers.constructLLFromArr([1])
)) == true);
