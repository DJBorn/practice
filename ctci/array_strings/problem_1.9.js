// String Rotation
// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat")

// O(n) Time
// O(1) Space
function stringRotation(strA, strB) {
    if(typeof strA != "string" || typeof strB != "string")
        throw new Error("Invalid Input");
        
    if(strA.length != strB.length)
        return false;

    let doubleStrB = strB + strB;
    return doubleStrB.includes(strA);
}

console.assert(stringRotation("waterbottle", "terbottlewa") == true);
console.assert(stringRotation("aterbottle", "terbottlewa") == false);
console.assert(stringRotation("water", "tarwe") == false);