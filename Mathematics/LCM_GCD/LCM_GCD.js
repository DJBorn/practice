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
var LCM = function(a, b) {
    return a*b/GCD(a, b);
}

console.log("LCM(10, 5)");
console.log(LCM(10, 5));
console.log("GCD(10, 5)");
console.log(GCD(10, 5));
console.log("LCM(14, 5)");
console.log(LCM(14, 8));
console.log("GCD(14, 8)");
console.log(GCD(14, 8));
console.log("LCM(0, 5)");
console.log(LCM(0, 5));
console.log("GCD(0, 5)");
console.log(GCD(0, 5));
console.log("LCM(1477, 1277)");
console.log(LCM(1477, 1277));
console.log("GCD(1477, 1277)");
console.log(GCD(1477, 1277));
console.log("LCM(144232, 435232)");
console.log(LCM(144232, 435232));
console.log("GCD(144232, 435232)");
console.log(GCD(144232, 435232));