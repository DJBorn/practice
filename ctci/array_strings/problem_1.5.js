// One Away
// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// Assumptions made:
// - Only consider lower case alphabet characters for the palindrome

// Notes:
// If alphabet size is > 32, need to use hash table instead

// O(n) Time
// O(1) Space
function oneAway(strA, strB) {
    if(typeof strA != "string" || typeof strB != "string")
        throw new Error("Invalid Input");
    
    let lengthDiff = Math.abs(strA.length - strB.length);
    if(lengthDiff > 1) return false;

    let bigger = strA.length > strB.length ? strA : strB;
    let smaller = strA.length > strB.length ? strB : strA;
    let indexA = indexB = 0;
    let diffFound = false;

    // Check for diff
     while(indexA < bigger.length && indexB < smaller.length) {
        if(bigger[indexA] != smaller[indexB]) {
            if(diffFound)
                return false;
            diffFound = true;
            // If length mismatch, then decrement the shorter array. Every character from now on should match.
            if(lengthDiff == 1)
                indexB--;
        }
        indexA++;
        indexB++;
    }

    return true;
}

console.assert(oneAway("", "a") == true);
console.assert(oneAway("a", "a") == true);
console.assert(oneAway("ab", "ab") == true);
console.assert(oneAway("ab", "abc") == true);
console.assert(oneAway("abc", "ac") == true);
console.assert(oneAway("abcd", "abdc") == false);
console.assert(oneAway("abcd", "ab") == false);