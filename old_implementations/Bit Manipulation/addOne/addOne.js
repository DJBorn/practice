// Add one to a number without using +, -, *, /, etc.
function addOne(num) {
    var addBit = 1;
    while((num&addBit) !== 0) {
        num &= ~addBit;
        addBit <<= 1;
    }
    num |= addBit;
    return num;
}



console.log("Add 1 to 1");
console.log(addOne(1));
console.log("Add 1 to 127");
console.log(addOne(127));
console.log("Add 1 to 0");
console.log(addOne(0));
console.log("Add 1 to -1");
console.log(addOne(-1));
console.log("Add 1 to -129");
console.log(addOne(-129));