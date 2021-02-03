// String Compression
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z)

// O(n) Time
// O(k) Space (k # of compressions)
function stringCompression(str) {
    if(typeof str != "string")
        throw new Error("Invalid Input");
    
    let result = [];
    let curCount = 0;
    let curLength = 0;
    for(let i = 0; i < str.length; i++) {
        // Increase counter
        curCount++;

        // If this is the end of the string, or next char does not equal, then store compressed char
        if(i+1 >= str.length || str[i] != str[i+1]) {
            let compressionChar = str[i] + curCount;
            result.push(compressionChar);
            curLength += compressionChar.length;
            curCount = 0;
        }
    }

    if(curLength < str.length)
        return result.join('');
    return str;
}

console.assert(stringCompression("") == "");
console.assert(stringCompression("a") == "a");
console.assert(stringCompression("aa") == "aa");
console.assert(stringCompression("aaa") == "a3");
console.assert(stringCompression("aabb") == "aabb");
console.assert(stringCompression("aaaabc") == "aaaabc");
console.assert(stringCompression("aaaaaaaaaa") == "a10");
console.assert(stringCompression("aaaaaaaaaabbbcaa") == "a10b3c1a2");