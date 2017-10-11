// Search for element in a rotated sorted array
// O(log n) Time
// O(log n) Space

var searchSortedRotatedArr = function(arr, val) {
    function binarySearch(start, end, val) {
        if(start > end)
            return false;
        var i = Math.floor((end + start)/2);
        if(arr[i] === val)
            return i;
        if(arr[0] <= arr[i]) {
            if(arr[0] <= val && val < arr[i]) 
                return binarySearch(start, i-1, val);
        }
        else if(arr[0] > arr[i] && (arr[0] <= val || val < arr[i]))
            return binarySearch(start, i-1, val);
        return binarySearch(i+1, end, val);
    }
    return binarySearch(0, arr.length, val);
}

console.log("Search for 0 in []");
console.log(searchSortedRotatedArr([], 0));
console.log("Search for 0 1 in [1]");
console.log(searchSortedRotatedArr([1], 0));
console.log(searchSortedRotatedArr([1], 1));
console.log("Search for 0, 1, 2, 3, 4, 5, 6 in [1, 2, 3, 4, 5]");
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 0));
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 1));
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 2));
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 3));
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 4));
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 5));
console.log(searchSortedRotatedArr([1, 2, 3, 4, 5], 6));
console.log("Search for 0, 1, 2, 3, 4, 5, 6 in [3, 4, 5, 1, 2]");
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 0));
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 1));
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 2));
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 3));
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 4));
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 5));
console.log(searchSortedRotatedArr([3, 4, 5, 1, 2], 6));
console.log("Search for 0, 1, 2, 3, 4, 5, 6 in [4, 5, 1, 2, 3]");
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 0));
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 1));
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 2));
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 3));
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 4));
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 5));
console.log(searchSortedRotatedArr([4, 5, 1, 2, 3], 6));