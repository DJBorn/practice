// Given a string of lower/upper case letters, count the number of characters where their index matches their index in the english alphabet
// O(k) Time (k = alphabet size)
// O(1) Space;

var countSamePositionAlphabet = function(str) {
    var aAscii = 'a'.charCodeAt(0);
    var AAscii = 'A'.charCodeAt(0);
    var alphabetLength = 26;
    var count = 0;
    for(let i = 0; i < alphabetLength; i++) {
        if(str.charCodeAt(i) - aAscii === i || str.charCodeAt(i) - AAscii === i)
            count++;
    }
    return count;
}

console.log("Check ABcED")
console.log(countSamePositionAlphabet("ABcED"));
console.log("Check iWoNdErHOwmanYCHaraCtersMatcH")
console.log(countSamePositionAlphabet("iWoNdErHOwmanYCHaraCtersMatcH"));
console.log("Check abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")
console.log(countSamePositionAlphabet("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"));
console.log("Check ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ")
console.log(countSamePositionAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"));