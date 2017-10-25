var nextHighest = function(arr) {
    var stack = [];
    var output = [];
    for(let i = arr.length-1; i >= 0; i--) {
        var highest = -1;
        while(stack.length > 0 && stack[stack.length-1] <= arr[i])
            stack.pop();
        if(stack.length > 0)
            highest = stack[stack.length-1];
        output[i] = highest;
        stack.push(arr[i]);
    }
    return output;
}

function outputArr(arr) {
    output = "";
    for(let i = 0; i < arr.length; i++)
        output += arr[i] + " ";
    console.log(output);
}

console.log("[1, 2, 3, 4, 5]");
outputArr(nextHighest([1, 2, 3, 4, 5]));
console.log("[4, 5, 2, 25]");
outputArr(nextHighest([4, 5, 2, 25]));
console.log("[13, 7, 6, 12]");
outputArr(nextHighest([13, 7, 6, 12]));
console.log("[5, 4, 3, 2, 1]");
outputArr(nextHighest([5, 4, 3, 2, 1]));
console.log("[]");
outputArr(nextHighest([]));
console.log("[1, 1, 1, 1, 1]");
outputArr(nextHighest([1, 1, 1, 1, 1]));