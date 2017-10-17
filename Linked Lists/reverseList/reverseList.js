// Reverse linked list
// O(n) Time
// O(1) Space

var reverseList = function(head) {
    if(!head)
        return null;
    var last = null;
    var cur = head;
    var next = null;
    while(cur) {
        next = cur.next;
        cur.next = last;
        last = cur;
        cur = next;
    }
    return last;
}

var list = {
    data: 1,
    next: {
        data: 2,
        next: {
            data:3,
            next: null
        }
    }
};

console.log("Reverse 1 -> 2 -> 3");
console.log(reverseList(list));
console.log("Reverse null");
console.log(reverseList(null));
console.log("Reverse 1");
console.log(reverseList({data:1, next: null}));