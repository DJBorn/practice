// Palindrome
// Implement a function to check if a linked list is a palindrome

var helpers = require('./helpers.js');

function isPalindrome(head) {
    // O(n)
    let middle = findMiddleNode(head);

    // O(n)
    let tailHead = reverseLinkedList(middle);

    // O(n)
    return compareLinkedLists(head, tailHead);
}

function compareLinkedLists(head1, head2) {
    while (head1 && head2) {
        if (head1.data != head2.data)
            return false;
        head1 = head1.next;
        head2 = head2.next;
    }

    return !head1 && !head2;
}

function reverseLinkedList(head) {
    let prevNode = null;
    let curNode = head;
    while (curNode) {
        let nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
    }
    return prevNode;
}

function findMiddleNode(head) { 
    let slowNode = head;
    let slowNodePrev;
    let fastNode = head;
    while (fastNode && fastNode.next) {
        slowNodePrev = slowNode;
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    if (!fastNode && slowNodePrev) {
        slowNodePrev.next = null;
    }
    return slowNode;
}

console.assert(isPalindrome(helpers.constructLLFromArr(['a', 'b', 'c', 'b', 'a'])) == true);
console.assert(isPalindrome(helpers.constructLLFromArr(['a', 'b', 'b', 'a'])) == true);
console.assert(isPalindrome(helpers.constructLLFromArr(['a', 'a'])) == true);
console.assert(isPalindrome(helpers.constructLLFromArr(['a'])) == true);
console.assert(isPalindrome(helpers.constructLLFromArr([])) == true);
console.assert(isPalindrome(helpers.constructLLFromArr(['a', 'b', 'c', 'c', 'a'])) == false);
console.assert(isPalindrome(helpers.constructLLFromArr(['a', 'b', 'a', 'a'])) == false);