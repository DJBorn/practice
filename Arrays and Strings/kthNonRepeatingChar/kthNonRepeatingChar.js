// Given a string and number k, find the kth non-repeating character in the string
// O(n) Time
// O(n) Space

var kthNonRepeatingChar = function(arr, k) {
    var seen = {};
    for(let i = 0; i < arr.length; i++) {
        if(!seen[arr[i]])
            seen[arr[i]] = 0;
        seen[arr[i]]++;
    }
    for(let i = 0; i < arr.length; i++) {
        if(seen[arr[i]] && seen[arr[i]] === 1)
            k--;
        if(k === 0)
            return arr[i];
    }
    return -1;
}

console.log("Find abcdefgace where k = 3")
console.log(kthNonRepeatingChar("abcdefgace", 3));
console.log("Find abcdefgace where k = 1")
console.log(kthNonRepeatingChar("abcdefgace", 1));
console.log("Find abcdefgabcdefg where k = 1")
console.log(kthNonRepeatingChar("abcdefgabcdefg", 1));
console.log("Find '' where k = 1")
console.log(kthNonRepeatingChar("", 1));