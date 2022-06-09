// Given a word and a text, return the count of occurrences of anagrams of the word in the text
// O(n) Time
// O(aphabet) Space

var anagramSubstring = function(str, pattern) {
    var patternCharCount = {};
    var currentCharCount = {};
    var startIndex = 0;
    var endIndex = pattern.length-1;
    var subStringCount = 0;
    
    // Helper function to compare hash tallies
    function checkCharCount() {
        for(var char in patternCharCount) {
            if(currentCharCount[char] !== patternCharCount[char])
                return false;
        }
        return true;
    }
    
    // Store character count of pattern and first set of characters in the string
    for(let i = 0; i < pattern.length; i++) {
        if(!patternCharCount[pattern[i]])
            patternCharCount[pattern[i]] = 0;
        if(!currentCharCount[str[i]])
            currentCharCount[str[i]] = 0;
        patternCharCount[pattern[i]]++;
        currentCharCount[str[i]]++;
    }

    // Increment next character hash count and decrement previous character hash count and compare
    while(endIndex < str.length) {
        if(checkCharCount())
            subStringCount++;
        currentCharCount[str[startIndex]]--;
        startIndex++;
        endIndex++;
        if(!currentCharCount[str[endIndex]])
            currentCharCount[str[endIndex]] = 0;
        currentCharCount[str[endIndex]]++;
    }
    return subStringCount;
}

console.log(anagramSubstring("forxxorfxdofr", "for"));
console.log(anagramSubstring("aabaabaa", "aaba"));
console.log(anagramSubstring("aba", "aaba"));
console.log(anagramSubstring("aaaaaaaa", "a"));
console.log(anagramSubstring("abcdedcba", "abcde"));