// Next Number
// Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.

function nextNumber(n) {
	let bitString = (n >>> 0).toString("2").split("");
	console.log(bitString);

	let index = bitString.length - 1;
	let counter = -1;

	while (bitString[index] === "0") index--;

	while (index >= 0 && bitString[index] === "1") {
		counter++;
		index--;
	}

	if (index < 0) {
		bitString[0] = "1";
		for (let i = bitString.length; i > 0; i--) {
			if (counter > 0) {
				bitString[i] = "1";
				counter--;
			} else {
				bitString[i] = "0";
			}
		}
	} else {
		bitString[index] = "1";

		for (let i = bitString.length - 1; i > index; i--) {
			if (counter > 0) {
				bitString[i] = "1";
				counter--;
			} else {
				bitString[i] = "0";
			}
		}
	}
	console.log(bitString);
	console.log(parseInt(bitString.join(""), 2));

	bitString = (n >>> 0).toString("2").split("");

	index = bitString.length - 1;
	counter = 0;

	while (index >= 0 && bitString[index] === "1") {
		index--;
		counter++;
	}
	while (index >= 0 && bitString[index] === "0")
		index--;

	if (index < 0) {
		bitString[0] = "1";
		counter--;
		for (let i = 1; i < 32; i++) {
			if (counter > 0) {
				bitString[i] = "1";
				counter--;
			} else {
				bitString[i] = "0";
			}
		}
	} else {
		bitString[index++] = "0";
		bitString[index++] = "1";
		for (let i = index; i < bitString.length; i++) {
			if (counter > 0) {
				bitString[i] = "1";
				counter--;
			} else {
				bitString[i] = "0";
			}
		}
	}
	console.log(bitString);
	console.log(parseInt(bitString.join(""), 2) >> 0);
}


nextNumber(14);