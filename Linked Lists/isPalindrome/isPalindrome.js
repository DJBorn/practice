// Check if a linked list is a palindrome
// O(n) Time
// O(1) Space

var isPalindrome = function(head) {
    var middle = 0;
    var temp = head;
    while(temp) {
        middle++;
        temp = temp.next;
    }
    middle = Math.floor(middle/2);

    function reverse(head) {
        var prev = null;
        var cur = head;
        var next;
        while(cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    var endHead = head;
    for(let i = 0; i < middle; i++) {
        endHead = endHead.next;
    }
    endHead = reverse(endHead);

    for(let i = 0; i < middle; i++) {
        if(endHead.data !== head.data)
            return false;
        head = head.next;
        endHead = endHead.next;
    }
    return true;
}

function constructLL(word) {
    if(word.length === 0)
        return null;
    var head = {
        data: word[0],
        next: null
    }
    var cur = head;
    for(let i = 1; i < word.length; i++) {
        cur.next = {
            data: word[i],
            next: null
        }
        cur = cur.next;
    }
    return head;
}

var word = {
    data: 'r',
    next: {
        data: 'a',
        next: {
            data: 'd',
            next: {
                data: 'a',
                next: {
                    data: 'r',
                    next: null
                }
            }
        }
    }
}

console.log("radar");
console.log(isPalindrome(constructLL("radar")));
console.log("abcdedcba");
console.log(isPalindrome(constructLL("abcdedcba")));
console.log("abcdeedcba");
console.log(isPalindrome(constructLL("abcdeedcba")));
console.log("abcdeddcba");
console.log(isPalindrome(constructLL("abcdeddcba")));
console.log("a");
console.log(isPalindrome(constructLL("a")));
console.log("");
console.log(isPalindrome(constructLL("")));