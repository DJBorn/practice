// Is Unique
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// Assumptions made:
// - Using ASCII characters
// - Using lower case alphabet only 

// Notes:
// If alphabet size is > 32, need to use hash table instead
// If no O(1) space required, then need to sort first, which is O(nlogn) time

// O(n) Time
// O(a) Space (a = alphabet size)
function isUnique(str) {
    if(typeof str != "string")
        throw new Error("Invalid Input");

    const alphabetLength = 26;
    let tracker = 0;

    if(str.length > alphabetLength)
        return false;
    // alphabet fits within a 32 bit integer. 
    for(let i = 0; i < str.length; i++) {
        let charVal =  1 << (str.charCodeAt(i) - 'a'.charCodeAt(0));
        if((tracker & charVal) > 0)
            return false;
        tracker |= charVal;
    }
    return true;
}

console.assert(isUnique("") == true);
console.assert(isUnique("a") == true);
console.assert(isUnique("ab") == true);
console.assert(isUnique("abcdefb") == false);
console.assert(isUnique("abcdefghijklmnpoqrstuvwxyz") == true);
console.assert(isUnique("abcdefghijklmnpoqrstuvwxyza") == false);
try {
    isUnique(1);
} catch(e) {
    console.assert(e.message == "Invalid Input")
}