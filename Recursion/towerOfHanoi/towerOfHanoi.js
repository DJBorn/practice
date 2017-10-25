var towerOfHanoi = function(n) {
    function toh(n, start, end, aux) {
        if(n === 1)
            console.log("Move piece 1 from tower " + start + " to tower " + end);
        else {
            toh(n-1, start, aux, end);
            console.log("Move piece " + n + " from tower " + start + " to tower " + end);
            toh(n-1, aux, end, start);
        }
    }
    toh(n, 1, 3, 2);
}

console.log("1 Plates");
towerOfHanoi(1);
console.log("2 Plates");
towerOfHanoi(2);
console.log("3 Plates");
towerOfHanoi(3);
console.log("4 Plates");
towerOfHanoi(4);
