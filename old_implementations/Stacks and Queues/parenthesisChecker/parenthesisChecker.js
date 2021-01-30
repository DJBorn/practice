var parenthesisChecker = function(str) {
    var stack = [];

    function isPair(open, close) {
        if(open === '(')
            return close === ')';
        if(open === '[')
            return close === ']';
        if(open === '{')
            return close === '}';

    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '[' || str[i] === '{')
            stack.push(str[i]);
        else if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if(stack.length > 0 && isPair(stack[stack.length-1], str[i]))
                stack.pop();
            else
                return false;
        }
    }
    if(stack.length > 0)
        return false;
    return true;
}

console.log("Check {([])}")
console.log(parenthesisChecker("{([])}"));
console.log("Check (){}")
console.log(parenthesisChecker("(){}"));
console.log("Check {([)]}")
console.log(parenthesisChecker("{([)]}"));
console.log("Check ())")
console.log(parenthesisChecker("())"));
console.log("Check (()")
console.log(parenthesisChecker("(()"));
console.log("Check ''")
console.log(parenthesisChecker(""));
console.log("Check (a+[c-d]*{e})")
console.log(parenthesisChecker("(a+[c-d]*{e})"));