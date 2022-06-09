// Determines if one string is a permutation of the other
// O(n) Time
// O(n) Space
var isPermutation = function(str1, str2) {
	// Error Check
	if(typeof str1 != "string" || typeof str1 != "string")
		return -1;

	// Check str lengths match
	if(str1.length != str2.length)
		return false;

	// Initialize Hashmap
	var characters = {}

	// Count characters in str1
	for (var i = 0; i < str1.length; i++) {
		if(characters[str1[i]] == null)
			characters[str1[i]] = 0;
		characters[str1[i]]++;
	}

	// Count characters in str2
	for (var i = 0; i < str2.length; i++) {
		if(characters[str2[i]] == null)
			return false;
		characters[str2[i]]--;
		if(characters[str2[i]] < 0)
			return false;
	}

	return true;
}

console.log("aa:ba " + isPermutation("aa", "ab"));
console.log("ab:aa " + isPermutation("ab", "aa"));
console.log("-1:a " + isPermutation(-1, "a"));
console.log("a:ab " + isPermutation("a", "ab"));
console.log("ab:a " + isPermutation("ab", "a"));
console.log("ab:ba " + isPermutation("ab", "ba"));
console.log(": " + isPermutation("", ""));