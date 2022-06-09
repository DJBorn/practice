// Sort a given array filled with 0s and 1s
// O(n) Time
// O(1) Space

var sortZeroOne = function(arr) {
    function swap(index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    var start = 0, end = arr.length-1;
    while(start < end) {
        if(arr[start] === 1 && arr[end] === 0)
            swap(start, end);
        if(arr[start] === 0)
            start++;
        if(arr[end] === 1)
            end--;
    }
    return arr;
}

console.log("Sort [0, 0, 1, 0, 0]");
console.log(sortZeroOne([0, 0, 1, 0, 0]));
console.log("Sort [1, 1, 1, 0, 0, 0]");
console.log(sortZeroOne([1, 1, 1, 0, 0, 0]));
console.log("Sort [1, 0, 1, 0, 1, 0]");
console.log(sortZeroOne([1, 0, 1, 0, 1, 0]));
console.log("Sort [0, 0, 1, 0, 1, 1]");
console.log(sortZeroOne([0, 0, 1, 0, 1, 1]));
console.log("Sort [1]");
console.log(sortZeroOne([1]));
console.log("Sort []");
console.log(sortZeroOne([]));