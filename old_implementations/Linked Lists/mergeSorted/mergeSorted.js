// Merge two sorted linked lists
// O(n + m) Time
// O(1) Space

var mergeSorted = function(head1, head2) {
    var next1, next2, merged, newHead;

    if(!head1)
        return head2;
    else if(!head2)
        return head1;
    
    if(head1.data <= head2.data) {
        newHead = head1;
        merged = head1;
        next1 = head1.next;
        next2 = head2;
    }
    else {
        newHead = head2;
        merged = head2;
        next1 = head1;
        next2 = head2.next;
    }
    while(next1 && next2) {
        if(next1.data <= next2.data) {
            merged.next = next1;
            next1 = next1.next;
        }
        else {
            merged.next = next2;
            next2 = next2.next;
        }
        merged = merged.next;
    }
    if(next1)
        merged.next = next1;
    else
        merged.next = next2;
    return newHead;
}

var head1 = {
    data: 5,
    next: {
        data: 10,
        next: {
            data: 15,
            next: {
                data: 40,
                next: null
            }
        }
    }
}

var head2 = {
    data: 2,
    next: {
        data: 3,
        next: {
            data: 20,
            next: null
        }
    }
}

console.log("Merge 5 10 15 40 with 2 3 20");
console.log(mergeSorted(head1, head2));
console.log("Merge 5 10 15 40 with null");
console.log(mergeSorted(head1, null));
console.log("Merge null with 2 3 20");
console.log(mergeSorted(null, head2));
console.log("Merge null with null");
console.log(mergeSorted(null, null));