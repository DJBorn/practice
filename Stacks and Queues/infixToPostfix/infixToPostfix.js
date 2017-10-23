// Convert infix expression to postfix
// O(n) Time
// O(n) Space
var infixToPostfix = function(str) {
    var opStack = [];
    var output = "";

    function getPrec(char) {
        switch(char) {
            case '^':
                return 3;
            case '*':
            case '/':
                return 2;
            case '+':
            case '-':
                return 1;
            case '(':
                return -1;
        }
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(')
            opStack.push(str[i]);
        else if(str[i] === ')') {
            while(opStack[opStack.length-1] !== '(') {
                output += opStack.pop();
            }
            opStack.pop();
        }
        else if(str[i] === '^' || str[i] === '*' || str[i] === '/' || str[i] === '+' || str[i] === '-') {
            if(opStack.length > 0 && getPrec(opStack[opStack.length-1]) >= getPrec(str[i]))
                output += opStack.pop();
            opStack.push(str[i]);
        }
        else {
            output += str[i];
        }
    }
    while(opStack.length > 0)
        output += opStack.pop();
    return output;
}

console.log("a+b*(c^d-e)^(f+g*h)-i");
console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i"))
console.log("A*(B+C)/D");
console.log(infixToPostfix("A*(B+C)/D"))