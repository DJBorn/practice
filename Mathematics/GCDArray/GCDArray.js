var GCD = function(a, b) {
    if(a === b)
        return a;

    var tempA = a, tempB = b, r, gcd;
    r = tempA % tempB;
    gcd = tempB;
    while(r > 0) {
        tempA = tempB;
        tempB = r;
        gcd = tempB;
        r = tempA % tempB;
    }
    return gcd;
}

var GCDArray = function(arr) {
    var gcd = arr[0];
    for(let i = 1; i < arr.length; i++) {
        gcd = GCD(gcd, arr[i]);
    }
    return gcd;
}

console.log("GCDArray([1, 2, 3])");
console.log(GCDArray([1, 2, 3]));

console.log("GCDArray([2, 4, 6, 8])");
console.log(GCDArray([2, 4, 6, 8]));