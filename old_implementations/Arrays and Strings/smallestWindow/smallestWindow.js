// Given a string and pattern, find the smallest window in the string which contain all characters in the pattern
// O(n*k) Time
// O(1) Space
var smallestWindow = function(str, pattern) {
    str_hash = [];
    pattern_hash = [];

    if(str.length < pattern.length)
        return -1;

    for(let i = 0; i < 256; i++) {
        str_hash.push(0);
        pattern_hash.push(0);
    }
    for(let i = 0; i < pattern.length; i++) {
        pattern_hash[pattern.charCodeAt(i)]++;
    }

    var count = 0;
    var start = 0;
    var minStart = 0, minEnd = str.length;
    for(let i = 0; i < str.length; i++) {
        str_hash[str.charCodeAt(i)]++;
        if(pattern_hash[str.charCodeAt(i)] !== 0 && str_hash[str.charCodeAt(i)] === pattern_hash[str.charCodeAt(i)])
            count += pattern_hash[str.charCodeAt(i)];
        if(count >= pattern.length) {
            while(pattern_hash[str.charCodeAt(start)] <= str_hash[str.charCodeAt(start)] - 1 || 
                  pattern_hash[str.charCodeAt(start)] === 0) {
                if(pattern_hash[str.charCodeAt(start)] <= str_hash[str.charCodeAt(start)] - 1)
                    str_hash[str.charCodeAt(start)]--;
                start++;
            }
            if(i-start < minEnd - minStart) {
                minStart = start;
                minEnd = i;
            }
        }
    }
    if(count < pattern.length)
        return -1;
    return str.substring(minStart, minEnd+1);
}

console.log("zoomlazapzo oza");
console.log(smallestWindow("zoomlazapzo", "oza"));
console.log("zoomlazapzo ooza");
console.log(smallestWindow("zoomlazapzo", "ooza"));
console.log("aba abab");
console.log(smallestWindow("aba", "abab"));
console.log("baaabab aabb");
console.log(smallestWindow("baaabab", "aabb"));
console.log("timetopractice toc");
console.log(smallestWindow("timetopractice", "toc"));