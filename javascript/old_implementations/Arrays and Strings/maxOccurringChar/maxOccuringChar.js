// Find max occurring char in string
// O(n) time
// O(k) space where k is the alphabet
var maxOccurringChar = function(str) {
    var max = 0, maxChar = "";
    var count = {};
    for(let i = 0; i < str.length; i++) {
        if(!count[str[i]])
            count[str[i]] = 1;
        else
            count[str[i]]++;
        if(count[str[i]] > max) {
            max = count[str[i]];
            maxChar = str[i];
        }
    }
    return maxChar;
}

console.log("Input abca");
console.log(maxOccurringChar("abca"));
console.log("Input empty string");
console.log(maxOccurringChar(""));
console.log("Input abc");
console.log(maxOccurringChar("abc"));
console.log("Input azbzcazbzcazbab");
console.log(maxOccurringChar("azbzcazbzcazbab"));