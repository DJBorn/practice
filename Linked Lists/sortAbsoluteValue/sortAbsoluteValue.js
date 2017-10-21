// Sort a linked list that's sorted by ascending absolute value
// O(n) Time
// O(1) Space

var sortAbsoluteValue = function(head) {
    var negHead = null, negTail = null;
    var posHead = null, posTail = null;
    var cur = head;
    while(cur) {
        var next = cur.next;
        if(cur.data < 0) {
            if(!negHead) {
                negHead = cur;
                negTail = cur;
            }
            else {
                cur.next = negHead;
                negHead = cur;
            }
            negTail.next = null;
        }
        else {
            if(!posHead) {
                posHead = cur;
                posTail = cur;
            }
            else {
                posTail.next = cur;
                posTail = posTail.next;
            }
            posTail.next = null;
        }
        cur = next;
    }
    if(negTail)
        negTail.next = posHead;
    return negHead ? negHead : posHead;
}

var list = {
    data: 1,
    next: {
        data: -2,
        next: {
            data: 4,
            next: {
                data: -4,
                next: null
            }
        }
    }
}

console.log(sortAbsoluteValue(list));

list = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 4,
            next: {
                data: 6,
                next: null
            }
        }
    }
}

console.log(sortAbsoluteValue(list));

list = {
    data: -1,
    next: {
        data: -2,
        next: {
            data: -4,
            next: {
                data: -6,
                next: null
            }
        }
    }
}

console.log(sortAbsoluteValue(list));
console.log(sortAbsoluteValue(null));