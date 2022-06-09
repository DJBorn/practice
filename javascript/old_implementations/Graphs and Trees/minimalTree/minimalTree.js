// Create a binary tree given an array of sorted elements such that the height is minimized
// O(n) Space

var minimalTree = function(arr) {
	function minTree(lower, upper) {
		if(upper < lower)
			return null;
		else {
			var center = Math.floor((upper+lower)/2);
			return {
				data: arr[center],
				left: minTree(lower, center-1),
				right: minTree(center+1, upper)
			}
		}
	}
	return minTree(0, arr.length-1);
}

console.log("Create tree from [0, 1, 2, 3, 4, 5, 6, 7]")
console.log(minimalTree([0, 1, 2, 3, 4, 5, 6, 7]));