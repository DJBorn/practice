// Sort Stack
// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

// O(n^2) Time
// O(n) Space
function sortStack(stack) {
	let tempStack = [];
	
	while(stack.length > 0) {
		let value = stack.pop();
		let totalPopped = 0;
		while(tempStack.length > 0 && tempStack[tempStack.length -1] < value) {
			totalPopped++;
			stack.push(tempStack.pop());
}
tempStack.push(value);
for(let i = 0; i < totalPopped; i++) {
	tempStack.push(stack.pop());
}
	}
	return tempStack;
}

console.assert(isArrEqual(sortStack([2, 5, 3, 4, 1]), [5, 4, 3, 2, 1]));
console.assert(isArrEqual(sortStack([1, 2, 3]), [3, 2, 1]));
console.assert(isArrEqual(sortStack([3, 2, 1]), [3, 2, 1]));
console.assert(isArrEqual(sortStack([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]));

function isArrEqual(arr1, arr2) {
	if(arr1.length !== arr2.length)
		return false;
	for(let i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i])
			return false;
	}
	return true;
}