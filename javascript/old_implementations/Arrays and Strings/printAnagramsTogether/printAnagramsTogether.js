// Print a list of words in order of their anagrams
// O(N*MlogM + MNlogN) Time
// O(NM) Space

var printAnagramsTogether = function(arr) {
    var sortedWords = [];
    var output = "";

    // Sort each word and their related index in the original array in a new array
    for(let i = 0; i < arr.length; i++) {
        sortedWords.push({
            word: arr[i].split('').sort().join(''),
            index: i
        });
    }

    // Sort the new list by words
    sortedWords.sort(function(a, b) {
        return a.word > b.word;
    })

    // Print each word in the order of the sorted index
    for(let i = 0; i < sortedWords.length; i++) {
        output += arr[sortedWords[i].index] + " ";
    }
    return output;
}

console.log(printAnagramsTogether([]));
console.log(printAnagramsTogether(['abc', 'abc', 'bac', 'a', 'a', 'b', 'bb', 'bbb', 'b']));
console.log(printAnagramsTogether(['cat','dog','tac','god','act','baack','ckaab','abcdefg','gfedcba']));