// Return binary representation of an integer
// O(n) Time
// O(1) Space

var binaryRepresentation = function(num) {
    var str = "";
    for(var i = 31; i >= 0; i--) {
        str += num&(1 << i) ? 1 : 0;
    }
    return str;
}

console.log("Binary of 85:");
console.log(binaryRepresentation(85));
console.log("Binary of 1024:");
console.log(binaryRepresentation(1024));
console.log("Binary of 1023:");
console.log(binaryRepresentation(1023));
console.log("Binary of 0:");
console.log(binaryRepresentation(0));
console.log("Binary of -1:");
console.log(binaryRepresentation(-1));
console.log("Binary of -1024:");
console.log(binaryRepresentation(-1024));