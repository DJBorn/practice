// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

// O(m + n) Time (M and N being length of each string)
// O(a) Space (a = alphabet size)
function checkPermutation(strA, strB) {
    if(typeof strA != "string" || typeof strB != "string")
        throw new Error("Invalid Input");
    
    // Create hashmap of characters we've already seen
    let hashMap = {};

    // If the length isn't the same, no possible way it's a permutation
    if(strA.length != strB.length)
        return false;

    // Iterate through strA and count the instances of each character
    for(let i = 0; i < strA.length; i++) {
        if(hashMap[strA[i]] == undefined)
            hashMap[strA[i]] = 1;
        else
            hashMap[strA[i]]++;
    }

    // Iterate through strB and subtract the count of each seen character
    for(let i = 0; i < strB.length; i++) {
        if(hashMap[strB[i]] == undefined)
            return false;
        hashMap[strB[i]]--;
    }

    // Hashmap should contain a 0 count for all characters
    for(const hashKey in hashMap) {
        if(hashMap[hashKey] != 0)
            return false;
    }
    return true;
}


console.assert(checkPermutation("", "") == true);
console.assert(checkPermutation("a", "a") == true);
console.assert(checkPermutation("abc", "cba") == true);
console.assert(checkPermutation("abc", "ab") == false);
console.assert(checkPermutation("aaabbc", "ababac") == true);
console.assert(checkPermutation("12!@#$%", "%$#@!12") == true);
try {
    checkPermutation("", 1);
} catch(e) {
    console.assert(e.message == "Invalid Input");
}
try {
    checkPermutation(null, "");
} catch(e) {
    console.assert(e.message == "Invalid Input");
}
try {
    checkPermutation(undefined, 1);
} catch(e) {
    console.assert(e.message == "Invalid Input");
}