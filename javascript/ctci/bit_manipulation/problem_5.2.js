// Binary to String
// Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR"

function binaryToString(n) {
	let currentDigit = 0.5;

	let currentString = ["."];
	while (n > 0) {
		if (currentString.length > 32)
			return "ERROR";
		if (n - currentDigit >= 0) {
			currentString.push("1");
			n -= currentDigit;
		} else {
			currentString.push("0");
		}
		currentDigit /= 2;
	}
	return currentString.join('');
}

console.assert(binaryToString(0.5) === ".1");
console.assert(binaryToString(0.75) === ".11");
console.assert(binaryToString(0.875) === ".111");
console.assert(binaryToString(0.625) === ".101");
console.assert(binaryToString(0.125) === ".001");