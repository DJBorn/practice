var quickSort = function(arr) {
    function quick_sort(low, high) {
        if(low > high)
            return;
        function partition(low, high) {
            var pivot = arr[high];
            var lower = low;
            for(let i = low; i < high; i++) {
                if(arr[i] <= pivot) {
                    let temp = arr[i];
                    arr[i] = arr[lower];
                    arr[lower] = temp;
                    lower++;
                }
            }
            let temp = arr[lower];
            arr[lower] = arr[high];
            arr[high] = temp;

            return lower;
        }
        var pivot = partition(low, high);
        quick_sort(low, pivot-1);
        quick_sort(pivot+1, high);
    }
    quick_sort(0, arr.length-1);
    return arr;
}

console.log(quickSort([5,3,6,1,7]));
console.log(quickSort([5,4,3,2,1]));
console.log(quickSort([1,2,3,4,5]));
console.log(quickSort([1,2]));
console.log(quickSort([2,1]));

var arr = [];
for(var i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(quickSort(arr));