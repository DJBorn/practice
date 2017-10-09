// Multiply integer with 3.5 and return integer result without using *, /, %
var multiplyWith3Point5 = function(num) {
    return (num << 1) + num + (num >> 1);
}

console.log("Multiply 3.5 with 4");
console.log(multiplyWith3Point5(4));
console.log("Multiply 3.5 with 0");
console.log(multiplyWith3Point5(0));
console.log("Multiply 3.5 with -4");
console.log(multiplyWith3Point5(-4));
console.log("Multiply 3.5 with 1");
console.log(multiplyWith3Point5(1));
console.log("Multiply 3.5 with 2");
console.log(multiplyWith3Point5(2));
console.log("Multiply 3.5 with 3");
console.log(multiplyWith3Point5(3));