// Loop Detection
// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an earlier node, so as to make a loop in the linked list

var helpers = require('./helpers.js');

// O(n) Time
// O(1) Space
function loopDetection(head) {
    if (!head)
        return head;

    let intersectionNode = findIntersectionNode(head);

    return findLoopNode(head, intersectionNode);
}

function findIntersectionNode(head) {
    let slowNode = head;
    let fastNode = head;
    while (fastNode && fastNode.next) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
        if (fastNode === slowNode)
            return slowNode;
    }
    return null;
}

function findLoopNode(head, intersectionNode) {
    if (!head || !intersectionNode)
        return null;
    while (head && intersectionNode) {
        if (head === intersectionNode)
            return head;
        head = head.next;
        intersectionNode = intersectionNode.next;
    }
    return null;
}


let head = helpers.constructLLFromArr([1, 2, 3, 4, 5]);

head.next.next.next.next.next = head;
console.assert(loopDetection(head) === head);

head.next.next.next.next.next = head.next;
console.assert(loopDetection(head) === head.next);

head.next.next.next.next.next = head.next.next;
console.assert(loopDetection(head) === head.next.next);

head.next.next.next.next.next = head.next.next.next;
console.assert(loopDetection(head) === head.next.next.next);

head.next.next.next.next.next = head.next.next.next;
console.assert(loopDetection(head) === head.next.next.next);

head.next = head;
console.assert(loopDetection(head) === head);