// Sort a linked list of 0s, 1s, and 2s in ascending order
// O(n) Time
// O(1) Space
var sortThreeNums = function(head) {
    var heads = [];
    var tails = [];

    var cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = null;
        if(!heads[cur.data]) {
            heads[cur.data] = cur;
            tails[cur.data] = cur;
        }
        else {
            tails[cur.data].next = cur;
            tails[cur.data] = tails[cur.data].next;
        }
        cur = next;
    }
    var startHead = null;
    for(let i = 0; i < heads.length; i++) {
        // identify head
        if(!startHead && heads[i])
            startHead = heads[i];
        let diff = 1;
        // iterate until a valid tail is found
        while(heads[i] && !tails[i] && i < heads.length-1)
            i++;
        // find next valid head after tail
        while(!heads[i+diff] && i+diff < heads.length)
            diff++;
        // if found, merge
        if(tails[i] && heads[i+diff]) {
            tails[i].next = heads[i+diff];
        }
    }
    return startHead;
}

var list = {
    data: 2,
    next: {
        data: 1,
        next: {
            data: 0,
            next: {
                data: 2,
                next: {
                    data: 0,
                    next: {
                        data: 1,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(sortThreeNums(list));

list = {
    data: 2,
    next: {
        data: 1,
        next: null
    }
}

console.log(sortThreeNums(list));

list = {
    data: 2,
    next: {
        data: 0,
        next: null
    }
}

console.log(sortThreeNums(list));

list = {
    data: 1,
    next: {
        data: 0,
        next: null
    }
}

console.log(sortThreeNums(list));

list = {
    data: 2,
    next: null
}

console.log(sortThreeNums(list));

list = null

console.log(sortThreeNums(list));