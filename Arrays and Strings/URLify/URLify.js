// Change all spaces in a string to %20 given its true length
// Additional space will be provided at the end of the string
// Using an array of characters for Javascript
// O(n) Time
// O(1) Space
var URLify = function(str, len) {
	if(!Array.isArray(str) || typeof len != "number")
		return -1;

	var spaces = 0;

	for(var i = 0; i < len; i++) {
		if(str[i] == ' ')
			spaces++;
	}

	for(var i = len-1; i >= 0 && spaces > 0; i--) {
		var shift = i+spaces*2;
		if(str[i] == ' ') {
			str[shift] = '0';
			str[shift-1] = '2';
			str[shift-2] = '%';
			spaces--;
		}
		else {
			str[shift] = str[i];
		}
	}

	return str;
}

console.log(URLify(['a', ' ', 'b', ' ', ' ', ' ', ' ', ' '], 4));
console.log(URLify([''], 0));
console.log(URLify([' ', ' ', ' '], 1));
console.log(URLify(['a'], 1));