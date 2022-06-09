// Insertion
// You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through i have enough space to fit all of M. That is, if M = 10011, you can assume that there are at least 5 bits between j and i, You would not, for example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.

// EXAMPLE
// Input: N = 10000000000, M = 10011, i = 2, j = 6
// Output: N = 10001001100

function insertion(n, m, i, j) {
	let leftMask = -1 << (j + 1);
	let rightMask = (1 << i) - 1;
	let mask = leftMask | rightMask;
	return (n & mask) | (m << i)
}

let n = parseInt("10000000000", 2);
let m = parseInt("10011", 2);
let i = 2
let j = 6
let output = parseInt("10001001100", 2);

console.assert(insertion(n, m, i, j) === output);