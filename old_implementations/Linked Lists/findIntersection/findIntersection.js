// Find the intersection of two linked lists
// O(n) Time
// O(1) Space

var findIntersection = function(head1, head2) {
    var curNode1 = head1;
    var curNode2 = head2;
    var longList, shortList
    var diff;

    function count(head) {
        var size = 0;
        while(head) {
            size++;
            head = head.next;
        }
        return size;
    }
    
    var list1Size = count(head1);
    var list2Size = count(head2);

    diff = Math.abs(list1Size-list2Size);
    
    if(list1Size > list2Size) {
        longList = head1;
        shortList = head2;
    }
    else {
        longList = head2;
        shortList = head1;
    }

    for(let i = 0; i < diff; i++) {
        longList = longList.next;
    }
    
    while(longList !== shortList) {
        longList = longList.next;
        shortList = shortList.next;
    }

    return longList.data;
}

var intersection = {
    data: 2,
    next: {
        data: 1,
        next: null
    }
}

var head1 = {
    data: 3,
    next: intersection
}

var head2 = {
    data: 5,
    next: {
        data: 4,
        next: {
            data: 3,
            next: intersection
        }
    }
}

console.log("Find intersection of 5 -> 4 -> 3 -> 2 -> 1 -> null")
console.log("                               3 -^")
console.log(findIntersection(head1, head2));
console.log("Find intersection of           3 -> 2 -> 1 -> null")
console.log("                     5 -> 4 -> 3 -^")
console.log(findIntersection(head1, head2));
head1 = {
    data: 5,
    next: {
        data: 4,
        next: head1
    }
};
console.log("Find intersection of 5 -> 4 -> 3 -> 2 -> 1 -> null")
console.log("                     5 -> 4 -> 3 -^")
console.log(findIntersection(head1, head2));
intersection.next = null;
console.log("Find intersection of 5 -> 4 -> 3 -> 2 -> null")
console.log("                     5 -> 4 -> 3 -^")
console.log(findIntersection(head1, head2));