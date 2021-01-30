// Insert binary representation of M into N starting from j and ending at i
// O(1) time
// O(1) space

var insertBitNum = function(N, M, i, j) {
	var mask = ~(((1<<(j-i+1))-1)<<i);
	N &= mask;
	N |= M << i;
	return N;
}

console.log("Insert 10011 into 10000000000 from bit 6 to bit 2");
console.log("Result should be 10001001100");
console.log(insertBitNum(1024, 19, 2, 6));
console.log("Insert 10011 into 1111111111 from bit 6 to bit 2");
console.log("Result should be 1111001111");
console.log(insertBitNum(1024 -1, 19, 2, 6));