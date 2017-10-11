// Find the rotation count in a rotated sorted array (right rotations)
// O(log n) Time
// O(1) Space
var rotationCount = function(arr) {
    function binarySearch(start, end) {
        if(start >= end)
            return 0;
        var i = Math.floor((start + end)/2);
        if(arr[i] > arr[i+1])
            return i+1;
        if(arr[0] <= arr[i])
            return binarySearch(i+1, end);
        return binarySearch(start, i);
    }
    return binarySearch(0, arr.length-1);
}

console.log("Count []");
console.log(rotationCount([]));
console.log("Count [1]");
console.log(rotationCount([1]));
console.log("Count [1,2,3,4,5]");
console.log(rotationCount([1,2,3,4,5]));
console.log("Count [5,1,2,3,4]");
console.log(rotationCount([5,1,2,3,4]));
console.log("Count [4,5,1,2,3]");
console.log(rotationCount([4,5,1,2,3]));
console.log("Count [3,4,5,1,2]");
console.log(rotationCount([3,4,5,1,2]));
console.log("Count [2,3,4,5,1]");
console.log(rotationCount([2,3,4,5,1]));

console.log("Count [1,2,3,4,5,6]");
console.log(rotationCount([1,2,3,4,5,6]));
console.log("Count [6,1,2,3,4,5]");
console.log(rotationCount([6,1,2,3,4,5]));
console.log("Count [5,6,1,2,3,4]");
console.log(rotationCount([5,6,1,2,3,4]));
console.log("Count [4,5,6,1,2,3]");
console.log(rotationCount([4,5,6,1,2,3]));
console.log("Count [3,4,5,6,1,2]");
console.log(rotationCount([3,4,5,6,1,2]));
console.log("Count [2,3,4,5,6,1]");
console.log(rotationCount([2,3,4,5,6,1]));