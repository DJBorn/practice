// Find the maximum value of sum(i * arr[i]) for all 0 < i < arr.length with only rotations on a given array allowed
// O(n) Time
// O(1) Space
var maxSumRotation = function(arr) {
    var max = 0;
    var curMax;
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
        max += i*arr[i];
    }
    curMax = max;
    for(i = 0; i < arr.length-1; i++) {
        curMax += arr[i]*(arr.length) - sum;
        if(curMax > max)
            max = curMax;
    }
    return max;
}

console.log("Find Max of [1, 20, 2, 10]");
console.log(maxSumRotation([1, 20, 2, 10]));
console.log("Find Max of [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]");
console.log(maxSumRotation([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));