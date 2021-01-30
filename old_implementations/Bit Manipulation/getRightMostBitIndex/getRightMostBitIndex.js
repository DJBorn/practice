// Given an integer, return the index of the rightmost set bit from right to left
// O(1) Time
// O(1) Space

var getRightMostBitIndex = function(num) {
    return num === 0 ? 0 : Math.log2(num^(num&(num-1)))+1;
}

console.log("Get rightmost of 0");
console.log(getRightMostBitIndex(0));
console.log("Get rightmost of 1");
console.log(getRightMostBitIndex(1));
console.log("Get rightmost of 2");
console.log(getRightMostBitIndex(2));
console.log("Get rightmost of 4");
console.log(getRightMostBitIndex(4));
console.log("Get rightmost of 8");
console.log(getRightMostBitIndex(8));
console.log("Get rightmost of 1024");
console.log(getRightMostBitIndex(1024));
console.log("Get rightmost of 1032");
console.log(getRightMostBitIndex(1032));
console.log("Get rightmost of 9");
console.log(getRightMostBitIndex(9));
console.log("Get rightmost of -4");
console.log(getRightMostBitIndex(-4));