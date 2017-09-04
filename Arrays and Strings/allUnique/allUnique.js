// Determine if all characters in a string are unique
// Assumes ascii encoding
// O(n) Time
// O(1) Space
var allUnique = function(str) {
	if (typeof str != "string")
		return -1;

	// Create an array to keep track of which ascii values has been seen
	var seen_chars = [];
	seen_chars.fill(false, 0, 128);

	for(var i = 0; i < str.length; i++) {
		var ascii_code = str.charCodeAt(i);
		if(seen_chars[ascii_code])
			return false;
		seen_chars[ascii_code] = true;
	}
	return true;
}

console.log(allUnique(""));
console.log(allUnique("a"));
console.log(allUnique("aba"));
console.log(allUnique(1));