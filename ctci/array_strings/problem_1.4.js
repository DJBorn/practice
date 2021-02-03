// Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// Assumptions made:
// - Only consider lower case alphabet characters for the palindrome

// Notes:
// If alphabet size is > 32, need to use hash table instead

// O(n) Time
// O(a) Space (a = alphabet size)
function palindromePermutation(str) {
    if(typeof str != "string")
        throw new Error("Invalid Input");

    let charCount = 0;

    for(let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i) - 'a'.charCodeAt(0);
        // Check if valid lower case alphabet
        if(0 <= char && char < 26) {
            // Flip bit
            charCount ^= 1 << char;
        }
    }

    // Check if all even, or at most 1 odd
    return !charCount || !(charCount & (charCount - 1));
}

console.assert(palindromePermutation("") == true);
console.assert(palindromePermutation("a") == true);
console.assert(palindromePermutation("aa") == true);
console.assert(palindromePermutation("aab") == true);
console.assert(palindromePermutation("ab") == false);
console.assert(palindromePermutation("!@#$%^&*()ABfunny yu") == true);