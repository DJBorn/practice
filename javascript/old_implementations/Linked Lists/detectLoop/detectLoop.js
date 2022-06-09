// Detect if there's a loop in a linked list
// O(n) Time
// O(1) Space
var detectLoop = function(head) {
    var slow = head;
    var fast = head;
    while(slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast)
            return true;
    }
    return false;
}

var tail = {
    data: 5,
    next: null
};

var list = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 4,
                next: tail
            }
        }
    }
}
console.log("1 -> 2 -> 3 -> 4 -> 5 -> null")
console.log(detectLoop(list));
tail.next = list;
console.log("1 -> 2 -> 3 -> 4 -> 5 -<1")
console.log(detectLoop(list));
tail.next = list.next;
console.log("1 -> 2 -> 3 -> 4 -> 5 -<2")
console.log(detectLoop(list));
tail.next = tail;
console.log("5 -<5")
console.log(detectLoop(list));
console.log("null")
console.log(detectLoop(null));