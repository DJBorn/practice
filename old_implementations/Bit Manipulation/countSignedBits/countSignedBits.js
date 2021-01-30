// Given a positive integer, count the number of set bits
// Brian Kerninghan's algorithm used
// O(log n) Time
// O(1) Space

var countSignedBits = function(n) {
    var count = 0;
    while(n !== 0) {
        n = n&(n-1);
        count++;
    }
    return count;
}

console.log(countSignedBits(72));
console.log(countSignedBits(1023));
console.log(countSignedBits(1024));
console.log(countSignedBits(0));