// Sum Lists
// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in order. Write a function that adds the two numbers and returns the sum as a linked list.

var helpers = require('./helpers.js');

// O(n) Time
// O(n) Space
function sumLists(head1, head2) {
    if (!head1)
        return head2;
    if (!head2)
        return head1;

    let head1Size = lengthOfLinkedList(head1);
    let head2Size = lengthOfLinkedList(head2);
    let difference = Math.abs(head1Size - head2Size);

    if (head1Size > head2Size)
        head2 = addZeroes(head2, difference);
    else
        head1 = addZeroes(head1, difference);

    let addedLists = sumListsHelper(head1, head2);

    if (addedLists.data > 9) {
        addedLists.data %= 10;
        addedLists = {
            data: 1,
            next: addedLists
        }
    }
    return addedLists;
}

function lengthOfLinkedList(head) {
    let size = 0;
    while (head) {
        head = head.next;
        size++;
    }
    return size;
}

function addZeroes(head, n) {
    if (!head)
        return head;
    for (let i = 0; i < n; i++) {
        head = {
            data: 0,
            next: head
        }
    }
    return head;
}


function sumListsHelper(head1, head2) {
    if (!head1)
        return head2;
    if (!head2)
        return head1;

    let addedNext = sumListsHelper(head1.next, head2.next);

    if (addedNext && addedNext.data > 9) {
        head1.data += 1;
        addedNext.data %= 10;
    }
    head1.data += head2.data;
    head1.next = addedNext;
    return head1;
}

console.assert(
    helpers.compareLL(
        sumLists(
            helpers.constructLLFromArr([3, 5, 8, 5, 2, 2, 1]),
            helpers.constructLLFromArr([3, 5, 8, 5, 3, 2, 1])),
        helpers.constructLLFromArr([7, 1, 7, 0, 5, 4, 2])) ==
    true);


console.assert(
    helpers.compareLL(
        sumLists(
            helpers.constructLLFromArr([9, 9, 9]),
            helpers.constructLLFromArr([9])),
        helpers.constructLLFromArr([1, 0, 0, 8])) ==
    true);

console.assert(
    helpers.compareLL(
        sumLists(
            helpers.constructLLFromArr([9, 9]),
            helpers.constructLLFromArr([9, 9, 9, 9])),
        helpers.constructLLFromArr([1, 0, 0, 9, 8])) ==
    true);