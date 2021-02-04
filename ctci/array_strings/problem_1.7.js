// Rotate Matrix
// Given an image represented by an NxN matrix, where each pixel in the image is bytes, write a method to rotate the image by 90 degrees (clockwise). Can you do this in place?

// O(n^2) Time
// O(1) Space
function rotateMatrix(arr) {
    if(!Array.isArray(arr) || !Array.isArray(arr[0]) || arr.length != arr[0].length)
        throw new Error("Invalid Input");

    for(let i = 0; i < Math.floor(arr.length/2); i++) {
        rotateLayer(i, arr.length - (i*2), arr);
    }

    function rotateLayer(startIndex, n, arr) {
        for(let i = startIndex; i < startIndex + n - 1; i++) {
            // We need to move over 1 pixel per loop
            let offset = i - startIndex;
            // Swap top row with right row
            swapIndex(startIndex, startIndex + offset, startIndex + offset,         startIndex + n - 1,             arr);
            // Swap top row with bottom row
            swapIndex(startIndex, startIndex + offset, startIndex + n - 1,          startIndex + n - 1 - offset,    arr);
            // Swap top row with left row
            swapIndex(startIndex, startIndex + offset, startIndex + n - 1 - offset, startIndex,                     arr);
        }
    }

    function swapIndex(x1, y1, x2, y2, arr) {
        let temp = arr[x1][y1];
        arr[x1][y1] = arr[x2][y2];
        arr[x2][y2] = temp;
    }
    return arr;
}
console.assert(compare2DArray(rotateMatrix([[1, 2, 3],
                                            [4, 5, 6],
                                            [7, 8, 9]]), [[7, 4, 1],
                                                          [8, 5, 2],
                                                          [9, 6, 3]]) == true);
console.assert(compare2DArray(rotateMatrix([[1, 2, 3, 4],
                                            [5, 6, 7, 8],
                                            [9, 10, 11, 12],
                                            [13, 14, 15, 16]]), [[13, 9, 5, 1],
                                                                 [14, 10, 6, 2],
                                                                 [15, 11, 7, 3],
                                                                 [16, 12, 8, 4]]) == true);
console.assert(compare2DArray(rotateMatrix([[1, 2, 3, 4, 5],
                                            [6, 7, 8, 9, 10],
                                            [11, 12, 13, 14, 15],
                                            [16, 17, 18, 19, 20],
                                            [21, 22, 23, 24, 25]]), [[21, 16, 11, 6, 1],
                                                                     [22, 17, 12, 7, 2],
                                                                     [23, 18, 13, 8, 3],
                                                                     [24, 19, 14, 9, 4],
                                                                     [25, 20, 15, 10, 5]]) == true);
console.assert(compare2DArray(rotateMatrix([[1, 2],
                                            [3, 4]]), [[3, 1],
                                                       [4, 2]]) == true);
console.assert(compare2DArray(rotateMatrix([[1, 2],
                                            [3, 4]]), [[3, 1],
                                                       [3, 2]]) == false);
console.assert(compare2DArray(rotateMatrix([[1]]), [[1]]) == true);

function compare2DArray(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1.length; j++) {
            if(arr1[i][j] != arr2[i][j])
                return false;
        }
    }
    return true;
}