var mergeSort = function(arr) {
    function merge(start, middle, end) {
        var left = [], right = [];
        for(let i = start; i < middle; i++)
            left.push(arr[i]);
        for(let i = middle; i <= end; i++)
            right.push(arr[i]);
        var leftI = 0;
        var rightI = 0;
        for(let i = start; i <= end; i++) {
            if(!right[rightI] || left[leftI] <= right[rightI]) {
                arr[i] = left[leftI];
                leftI++;
            }
            else {
                arr[i] = right[rightI];
                rightI++;
            }
        }
    }
    function merge_sort(start, end) {
        if(start >= end)
            return;
        var middle = Math.floor((start + end)/2);
        merge_sort(start, middle);
        merge_sort(middle+1, end);
        merge(start, middle+1, end);
    }
    merge_sort(0, arr.length-1);
    return arr;
}

console.log(mergeSort([]));
console.log(mergeSort([3,1,2]));
console.log(mergeSort([5,3,6,1,7]));
console.log(mergeSort([5,4,3,2,1]));
console.log(mergeSort([1,2,3,4,5]));
console.log(mergeSort([1,2]));
console.log(mergeSort([2,1]));

var arr = [];
for(var i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(mergeSort(arr));