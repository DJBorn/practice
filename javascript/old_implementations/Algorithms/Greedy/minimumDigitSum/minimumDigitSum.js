// Given an array of digits, find the minimum possible sum of two numbers formed from digits of the array where all digits are used
// O(nlogn) Time
// O(n) Space

var minimumDigitSum = function(digits) {
    var num1 = "";
    var num2 = "";
    if(digits.length === 0)
        return 0;
    if(digits.length === 1)
        return digits[0];

    function bubbleDown(arr, i) {
        var smallest = i;
        if(i*2+1 < arr.length && arr[i*2+1] < arr[smallest])
            smallest = i*2+1;
        if(i*2+2 < arr.length && arr[i*2+2] < arr[smallest])
            smallest = i*2+2;
        if(smallest !== i) {
            var temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
            bubbleDown(arr, smallest);
        }
    }

    function heapify(arr, i) {
        if(i >= arr.length)
            return;
        heapify(arr, i*2+1);
        heapify(arr, i*2+2);
        bubbleDown(arr, i);
    }

    function extract(arr) {
        var temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;
        arr.pop();
        bubbleDown(arr, 0);
        return temp;
    }

    // Create a heap
    heapify(digits, 0);

    // Parse the lowest numbers on the leading digits
    while(digits.length > 0) {
        if(num1.length <= num2.length)
            num1 += extract(digits);
        else
            num2 += extract(digits);
    }

    return parseInt(num1) + parseInt(num2);
}

console.log("Minimum digit sum of []:");
console.log(minimumDigitSum([]));
console.log("Minimum digit sum of [1]:");
console.log(minimumDigitSum([1]));
console.log("Minimum digit sum of [2, 1]:");
console.log(minimumDigitSum([2, 1]));
console.log("Minimum digit sum of [0, 0, 2, 0, 1]:");
console.log(minimumDigitSum([0, 0, 2, 0, 1]));
console.log("Minimum digit sum of [8, 7, 6, 5, 4, 3, 2, 1]:");
console.log(minimumDigitSum([8, 7, 6, 5, 4, 3, 2, 1]));
console.log("Minimum digit sum of [6, 8, 4, 5, 2, 3]:");
console.log(minimumDigitSum([6, 8, 4, 5, 2, 3]));
console.log("Minimum digit sum of [5, 3, 0, 7, 4]:");
console.log(minimumDigitSum([5, 3, 0, 7, 4]));