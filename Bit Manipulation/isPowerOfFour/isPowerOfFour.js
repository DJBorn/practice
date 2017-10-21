var isPowerOfFour = function(num) {
    if(num === 0 || (num & (num << 1)))
        return 0;
    var totalZeroes = num-1;
    var counter = 1;
    var count = 0;
    while(totalZeroes&counter) {
        count++;
        counter <<= 1;
    }
    return count && ((count+1)%2);
}

console.log("Is 0 a power of four:");
console.log(isPowerOfFour(0));
console.log("Is 1 a power of four:");
console.log(isPowerOfFour(1));
console.log("Is 2 a power of four:");
console.log(isPowerOfFour(2));
console.log("Is 4 a power of four:");
console.log(isPowerOfFour(4));
console.log("Is 8 a power of four:");
console.log(isPowerOfFour(8));
console.log("Is 16 a power of four:");
console.log(isPowerOfFour(16));
console.log("Is 32 a power of four:");
console.log(isPowerOfFour(32));
console.log("Is 64 a power of four:");
console.log(isPowerOfFour(64));
console.log("Is 256 a power of four:");
console.log(isPowerOfFour(256));
console.log("Is 255 a power of four:");
console.log(isPowerOfFour(255));
console.log("Is 254 a power of four:");
console.log(isPowerOfFour(254));
console.log("Is 12 a power of four:");
console.log(isPowerOfFour(12));