var numberOfSubstrings = function(str, k) {
    var front = 0;
    var totalCount = 0;
    for(let i = 0; i < str.length; i++) {
        var count = {};
        var distinctChars = 0;
        for(let j = i; j < str.length; j++) {
            if(!count[str[j]])
                count[str[j]] = 0;
            count[str[j]]++;
            if(count[str[j]] === 1)
                distinctChars++;

            if(distinctChars > k)
                break;
            if(distinctChars === k)
                totalCount++;
        }
    }
    return totalCount;
}

console.log("Find substrings in '' where k = 2");
console.log(numberOfSubstrings("", 2));
console.log("Find substrings in 'a' where k = 2");
console.log(numberOfSubstrings("a", 2));
console.log("Find substrings in 'aba' where k = 2");
console.log(numberOfSubstrings("aba", 2));
console.log("Find substrings in 'abcab' where k = 2");
console.log(numberOfSubstrings("abcab", 2));
console.log("Find substrings in 'aa' where k = 1");
console.log(numberOfSubstrings("aa", 1));
console.log("Find substrings in 'aaba' where k = 2");
console.log(numberOfSubstrings("aaba", 2));
console.log("Find substrings in 'aabac' where k = 2");
console.log(numberOfSubstrings("aabac", 2));
console.log("Find substrings in 'aabaabababcbacbcbbcacbdbcbdbbcabcabcbabcbcdbdbadacacacabdbacbabc' where k = 2");
console.log(numberOfSubstrings("aabaabababcbacbcbbcacbdbcbdbbcabcabcbabcbcdbdbadacacacabdbacbabc", 2));