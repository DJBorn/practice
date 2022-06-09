// Given an array of N distinct elements and a number K, arrange the elements according to the absolute difference with K
// O(n log n) Time
// O(n) Space

var differenceSort = function(arr, n) {
    function merge(left, middle, right) {
        var leftArr = [];
        var rightArr = [];
        var leftArrI = 0;
        var rightArrI = 0;
        for(let i = left; i < middle; i++)
            leftArr.push(arr[i]);
        for(let i = middle; i <= right; i++)
            rightArr.push(arr[i]);

        for(let i = left; i <= right; i++) {
            if(!rightArr[rightArrI] || Math.abs(leftArr[leftArrI] - n) <= Math.abs(rightArr[rightArrI] - n)) {
                arr[i] = leftArr[leftArrI];
                leftArrI++;
            }
            else {
                arr[i] = rightArr[rightArrI];
                rightArrI++;
            }
        }
    }

    function mergeSort(left, right) {
        if(left >= right)
            return;
        let i = Math.floor((left + right)/2);
        mergeSort(left, i);
        mergeSort(i+1, right);
        merge(left, i+1, right);
    }

    mergeSort(0, arr.length-1);
    return arr;
}

console.log("Sort [] with n = 1");
console.log(differenceSort([],1));
console.log("Sort [10,5,3,9,2] with n = 7");
console.log(differenceSort([10,5,3,9,2],7));
console.log("Sort [2,43,52,83,48,32,52,11,50,51,48,52] with n = 50");
console.log(differenceSort([2,43,52,83,48,32,52,11,50,51,48,52],50));