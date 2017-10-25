// Given a matrix M where if an element of row i and column j is set to 1 it represents person i knows person j. A celebrity is defined
// as someone who does not know anyone and is known by everyone. Find the celebrity
// O(n) Time
// O(n) Space
var findCelebrity = function(M) {
    var stack = [];
    for(let i = 0; i < M.length; i++) {
        stack.push(i);
    }

    while(stack.length > 0) {
        let celeb1 = stack[stack.length-1];
        stack.pop();
        if(stack.length === 0) {
            for(let i = 0; i < M.length; i++) {
                if(M[celeb1][i] !== 0 || (i !== celeb1 && M[i][celeb1] === 0))
                    return -1;
            }
            return celeb1;
        }
        let celeb2 = stack[stack.length-1];
        stack.pop();
        if(M[celeb1][celeb2] === 1 && M[celeb2][celeb1] === 0)
            stack.push(celeb2);
        if(M[celeb2][celeb1] === 1 && M[celeb1][celeb2] === 0)
            stack.push(celeb1);
    }
    return -1;
}
console.log("[0, 1, 1]");
console.log("[0, 0, 0]");
console.log("[1, 1, 0]");
console.log(findCelebrity([[0, 1, 1], [0, 0, 0], [1, 1, 0]]));
console.log("[0, 0, 0]");
console.log("[0, 0, 0]");
console.log("[0, 0, 0]");
console.log(findCelebrity([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
console.log("[0, 0, 1, 0]");
console.log("[0, 0, 1, 0]");
console.log("[0, 0, 0, 0]");
console.log("[0, 0, 1, 0]");
console.log(findCelebrity([[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0]]));