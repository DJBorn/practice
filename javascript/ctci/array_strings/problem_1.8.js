// Zero Matrix
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// O(nm) Time
// O(1) Space
function zeroMatrix(arr) {
    if(!Array.isArray(arr) || !Array.isArray(arr[0]))
        throw new Error("Invalid Input");
        
    // Find the first 0 to use as our reference row/column array to keep track of which rows/columns we need to zero out
    // O(nm)
    let {refN, refM} = findReferenceIndex(arr);

    if(refN == null)
        return arr;

    // Populate our reference arrays with the zeroes
    // O(nm)
    populateRefArr(arr, refN, refM);

    // Zero out all the rows based on our reference array
    // O(nm)
    for(let i = 0; i < arr.length; i++) {
        if(i != refN && arr[i][refM] == 0)
            fillRowWithZeroes(arr, i)
    }

    // Zero out all the columns based on our reference array
    // O(nm)
    for(let i = 0; i < arr[0].length; i++) {
        if(i != refM && arr[refN][i] == 0)
            fillColumnWithZeroes(arr, i)
    }

    // Finally zero out our reference array
    // O(n + m)
    fillRowWithZeroes(arr, refN);
    fillColumnWithZeroes(arr, refM);
    return arr;
}

function fillColumnWithZeroes(arr, m) {
    if(!Array.isArray(arr) || !Array.isArray(arr[0]) || m < 0)
        throw new Error("Invalid Input");
    for(let i = 0; i < arr.length; i++) {
        arr[i][m] = 0;
    }
}

function fillRowWithZeroes(arr, n) {
    if(!Array.isArray(arr) || !Array.isArray(arr[0]) || n < 0)
        throw new Error("Invalid Input");
    for(let i = 0; i < arr[n].length; i++) {
        arr[n][i] = 0;
    }
}

function populateRefArr(arr, refN, refM) {
    if(!Array.isArray(arr) || !Array.isArray(arr[0]) || refN < 0 || refM < 0)
        throw new Error("Invalid Input");

    for(let n = 0; n < arr.length; n++) {
        for(let m = 0; m < arr[0].length; m++) {
            if(arr[n][m] == 0) {
                arr[n][refM] = 0;
                arr[refN][m] = 0;
            }
        }
    }
}

function findReferenceIndex(arr) {
    if(!Array.isArray(arr) || !Array.isArray(arr[0]))
        throw new Error("Invalid Input");

    for(let n = 0; n < arr.length; n++) {
        for(let m = 0; m < arr[0].length; m++) {
            if(arr[n][m] == 0)
                return {
                    refN: n,
                    refM: m
                }
        }
    }
    return {
        refN: null,
        refM: null
    }
}

console.assert(compare2DArray(zeroMatrix([[0, 2],
                                          [3, 4]]), [[0, 0],
                                                     [0, 4]]) == true);

console.assert(compare2DArray(zeroMatrix([[1, 2, 3],
                                          [0, 5, 6],
                                          [7, 8, 9]]), [[0, 2, 3],
                                                        [0, 0, 0],
                                                        [0, 8, 9]]) == true);

console.assert(compare2DArray(zeroMatrix([[1, 2, 3],
                                          [4, 0, 6],
                                          [7, 8, 9]]), [[1, 0, 3],
                                                        [0, 0, 0],
                                                        [7, 0, 9]]) == true);

console.assert(compare2DArray(zeroMatrix([[1, 2, 3],
                                          [4, 5, 6],
                                          [7, 8, 0]]), [[1, 2, 0],
                                                        [4, 5, 0],
                                                        [0, 0, 0]]) == true);

console.assert(compare2DArray(zeroMatrix([[1, 2, 3, 4, 5],
                                          [6, 7, 8, 9, 10],
                                          [11, 0, 13, 14, 15],
                                          [16, 17, 18, 0, 20],
                                          [21, 22, 23, 24, 0]]), [[1, 0, 3, 0, 0],
                                                                  [6, 0, 8, 0, 0],
                                                                  [0, 0, 0, 0, 0],
                                                                  [0, 0, 0, 0, 0],
                                                                  [0, 0, 0, 0, 0]]) == true);
console.assert(compare2DArray(zeroMatrix([[1, 2],
                                          [3, 4]]), [[1, 2],
                                                     [3, 4]]) == true);

console.assert(compare2DArray(zeroMatrix([[1]]), [[1]]) == true);



function compare2DArray(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1.length; j++) {
            if(arr1[i][j] != arr2[i][j])
                return false;
        }
    }
    return true;
}