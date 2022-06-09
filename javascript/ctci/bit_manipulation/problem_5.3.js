// Flip Bit to Win
// You have an integer and you can flip exactly one bit from 0 to a 1. Write code to find the length of the longest sequence of 1s you could create.

// EXAMPLE
// Input: 1775 (or: 11011101111)
// Output: 8

// O(b) Time
// O(1) Space
// b = bit string length
function flipBitToWin(n) {
	let bitString = (n >>> 0).toString("2");
	let start = 0;
	let middle = -1;
	let maxLength = 0;

	for (let i = 0; i < bitString.length; i++) {
		if (bitString[i] === "0") {
			if (middle < 0)
				middle = i;
			else {
				maxLength = Math.max(i - start, maxLength);
				start = middle + 1;
				middle = i;
			}
		}
	}
	return Math.max(bitString.length - start, maxLength);
}

console.assert(flipBitToWin(1775) === 8);		// 11011101111
console.assert(flipBitToWin(-33) === 32);		// 1111111111111111111111111111111111111111111111111111111111011111
console.assert(flipBitToWin(43) === 4);			// 101011
console.assert(flipBitToWin(14) === 4);			// 1110
console.assert(flipBitToWin(1424341) === 8);	// 101011011101111010101