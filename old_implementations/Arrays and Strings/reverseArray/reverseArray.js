var reverseArray = function(arr) {
    var start = 0;
    var end = arr.length-1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log("Reverse []");
console.log(reverseArray([]));
console.log("Reverse [1]");
console.log(reverseArray([1]));
console.log("Reverse [1,2,3]");
console.log(reverseArray([1,2,3]));
console.log("Reverse [1,2,3,4]");
console.log(reverseArray([1,2,3,4]));