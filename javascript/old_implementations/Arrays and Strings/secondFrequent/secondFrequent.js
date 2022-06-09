// Given a string, find the second most frequent character in it
// O(n) Time
// O(1) Space
var secondFrequent = function(str) {
    var alphabet = {0: 0};
    if(str.length <= 1)
        return -1;

    for(let i = 0; i < str.length; i++) {
        if(!alphabet[str[i]])
            alphabet[str[i]] = 0;
        alphabet[str[i]]++;
    }

    var maxChar = 0, secMaxChar = 0;
    for(var key in alphabet) {
        if(alphabet[key] > alphabet[maxChar]) {
            secMaxChar = maxChar;
            maxChar = key;
        }
        else if(alphabet[key] > alphabet[secMaxChar] && alphabet[key] !== alphabet[maxChar]) {
            secMaxChar = key;
        }
    }

    if(secMaxChar === 0)
        return -1;
    return secMaxChar;
}

console.log("Find second most frequent in: ");
console.log(secondFrequent(""));
console.log("Find second most frequent in: aab");
console.log(secondFrequent("aab"));
console.log("Find second most frequent in: abc");
console.log(secondFrequent("abc"));
console.log("Find second most frequent in: aabbc");
console.log(secondFrequent("aabbc"));
console.log("Find second most frequent in: aacbb");
console.log(secondFrequent("aacbb"));
console.log("Find second most frequent in: aabbcc");
console.log(secondFrequent("aabbcc"));
console.log("Find second most frequent in: aabbcdeee");
console.log(secondFrequent("aabbcdeee"));