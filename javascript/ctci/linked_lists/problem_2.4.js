// Partition
// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions
// 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
// 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

var helpers = require('./helpers.js');

// O(n) Time
// O(1) Space
function partition(head, x) {
    if(head == null || head.next == null)
        return false;
    
    let leftTail, leftHead = null, rightHead = null;
    let curNode = head;

    // Keep track of left and right side of the partition number x, and join them at the end
    while(curNode != null) {
        let nextNode = curNode.next;
        if(curNode.data < x) {
            curNode.next = leftHead;
            leftHead = curNode;
            if(leftTail == null)
                leftTail = leftHead;
        } else {
            curNode.next = rightHead;
            rightHead = curNode;
        }
        curNode = nextNode;
    }

    if(leftTail == null)
        return rightHead;

    leftTail.next = rightHead;
    return leftHead;
}

console.assert(
    helpers.compareLL(
        partition(helpers.constructLLFromArr([3, 5, 8, 5, 10, 2, 1]), 5),
        helpers.constructLLFromArr([1, 2, 3, 10, 5, 8, 5])) == 
    true);

console.assert(
    helpers.compareLL(
        partition(helpers.constructLLFromArr([3, 5, 8, 5, 10, 2, 1]), 0),
        helpers.constructLLFromArr([1, 2, 10, 5, 8, 5, 3])) == 
    true);

console.assert(
    helpers.compareLL(
        partition(helpers.constructLLFromArr([3, 5, 8, 5, 10, 2, 1]), 11),
        helpers.constructLLFromArr([1, 2, 10, 5, 8, 5, 3])) == 
    true);

console.assert(
    helpers.compareLL(
        partition(helpers.constructLLFromArr([3, 5, 8, 5, 10, 2, 1]), 3),
        helpers.constructLLFromArr([1, 2, 10, 5, 8, 5, 3])) == 
    true);