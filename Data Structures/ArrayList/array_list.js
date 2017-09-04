var ArrayList = function() {
	var data = [];
	var max_size = 0;
	var length = 0;

	this.insert = function (new_element) {
		if(new_element == null)
			return -1;
		if(length + 1 > max_size) {
			if(max_size == 0) {
				var new_array = []; // Theoretical size assign of 1
				max_size = 1;
				data = new_array;
			}
			else {
				var new_array = []; // Theoretical size assign of max_size * 2
				for(var i = 0; i < length; i++) {
					new_array[i] = data[i];
				}
				max_size *= 2;
				data = new_array;
			}
			data[length] = new_element;
			length++;
		}
		return new_element;
	}

	this.get_at = function (index) {
		if(index < 0 || index >= length)
			return -1;
		return data[index];
	}

	this.delete_at = function(index) {
		var ret;
		if(length == 0 || index < 0 || index >= length)
			return -1;
		ret = data[index];
		for(var i = index; i < length - 1; i++) {
			data[i] = data[i+1];
		}
		data[length] = null;
		length--;
		return ret;
	}
}

console.log("Create new array list");
var arr_list = new ArrayList();
console.log("Delete invalid index -1");
console.log(arr_list.delete_at(-1));
console.log("Insert 7");
console.log(arr_list.insert(7));
console.log("Insert 14");
console.log(arr_list.insert(14));
console.log("Insert 9");
console.log(arr_list.insert(9));
console.log("Insert invalid type 'undefined'");
console.log(arr_list.insert(undefined));
console.log("Retreive at index -1");
console.log(arr_list.get_at(-1));
console.log("Retreive at index 0");
console.log(arr_list.get_at(0));
console.log("Retreive at index 2");
console.log(arr_list.get_at(2));
console.log("Retreive at index 3");
console.log(arr_list.get_at(3));
console.log("Delete index 1");
console.log(arr_list.delete_at(1));
console.log("Retreive at index 2");
console.log(arr_list.get_at(2));