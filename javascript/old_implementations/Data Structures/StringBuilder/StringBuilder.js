// Simple StringBuilder that can append new strings and return the character array
var StringBuilder = function (size) {
	var max_size = (size == null ? 0 : size);
	var length = 0;
	var data = [];

	var resize = function() {
		if(max_size == 0) {
			max_size = 1;
			var new_arr = []; // Theoretical size assign of 1;
			data = new_arr;
		}
		else {
			max_size *= 2;
			var new_arr = []; // Theoretical size assign of max_size * 2;
			for(var i = 0; i < length; i++) {
				new_arr[i] = data[i];
			}
			data = new_arr;
		}
	}

	this.append = function (str) {
		if (typeof str != "string")
			return -1;
		while(length + str.length > max_size)
			resize();
		for(var i = 0; i < str.length; i++) {
			data[length+i] = str[i];
		}
		length += str.length;
		return str;
	}

	this.toString = function() {
		return data.join('');
	}
}

var sb = new StringBuilder();
console.log(sb.append("ab"));
console.log(sb.append(-1));
console.log(sb.append("de"));
console.log(sb.toString());