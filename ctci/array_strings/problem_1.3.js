// URLify
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

// O(n) Time
// O(1) Space
function URLify(str, len) {
    if(typeof str != "string" || !Number.isInteger(len))
        throw new Error("Invalid Input");

    // Create character array
    let strArr = str.split('');

    // Count total spaces
    let totalSpaces = 0;
    for(let i = 0; i < len; i++) {
        if(strArr[i] == ' ')
            totalSpaces++;
    }

    // Find the index where we need to start placing characters
    let toIndex = len + (totalSpaces * 2) - 1;
    let fromIndex = len - 1;

    while(fromIndex < toIndex) {
        if(strArr[fromIndex] == ' ') {
            // Imagine replacements are done in place
            strArr[toIndex] = '0'; toIndex--;
            strArr[toIndex] = '2'; toIndex--;
            strArr[toIndex] = '%'; toIndex--;
        } else {
            strArr[toIndex] = strArr[fromIndex]; toIndex--;
        }
        fromIndex--;
    }
    return strArr.join('');
}

console.assert(URLify("a b  ", 3) == "a%20b");
console.assert(URLify("this is a thing         ", 16) == "this%20is%20a%20thing%20");
console.assert(URLify("", 0) == "");
console.assert(URLify("abc", 3) == "abc");