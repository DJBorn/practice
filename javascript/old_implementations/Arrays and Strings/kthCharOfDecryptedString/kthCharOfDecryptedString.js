// Given an encoded string, find the kth character in the decoded version of the string (E.g. a11bc2 = aaaaaaaaaaabcbc)
// O(n) Time (n = decoded string)
// O(k) Space (k = longest encoded string/number)

var kthCharOfDecryptedString = function(str, k) {
    var i = 0;
    function parseChars(fn) {
        let chars = "";
        while(fn.call(this, str[i])) {
            chars += str[i];
            i++;
        }
        return chars
    }
    while(k >= 0 && i < str.length) {
        var letters = parseChars(isNaN);
        var number = parseInt(parseChars(function(x){ return !isNaN(x);}));
        if(k <= letters.length * number)
            return letters[(k-1) % letters.length];
        k -= letters.length * number;
    }
    return -1;
}

console.log("'' where k = 2");
console.log(kthCharOfDecryptedString("", 2));
console.log("a1b1 where k = 2");
console.log(kthCharOfDecryptedString("a1b1", 2));
console.log("a1b1 where k = 3");
console.log(kthCharOfDecryptedString("a1b1", 3));
console.log("ab2cd2 where k = 4");
console.log(kthCharOfDecryptedString("ab2cd2", 4));
console.log("a2b2c3 where k = 5");
console.log(kthCharOfDecryptedString("a2b2c3", 5));
console.log("ab4c2ed3 where k = 9");
console.log(kthCharOfDecryptedString("ab4c2ed3", 9));
console.log("ab4c12ed3 where k = 21");
console.log(kthCharOfDecryptedString("ab4c12ed3", 21));