// Find how many consecutive previous days the stock prices are lower than a stock at i for all days
// O(n) Time
// O(n) Space

var stockSpan = function(stock) {
    var stockSpan = [];
    var stack = [];
    if(stock.length === 0)
        return stockSpan;
    stockSpan[0] = 1;
    stack.push(0);
    for(let i = 1; i < stock.length; i++) {
        while(stack.length > 0 && stock[stack[stack.length-1]] <= stock[i])
            stack.pop();
        stockSpan[i] = stack.length === 0 ? i + 1 : i - stack[stack.length-1];
        stack.push(i);
    }
    return stockSpan;
}

console.log("Stock prices [100, 80, 60, 70, 60, 75, 85]");
console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
console.log("Stock prices [1, 2, 3, 4, 5]");
console.log(stockSpan([1, 2, 3, 4, 5]));
console.log("Stock prices [5, 4, 3, 2, 1]");
console.log(stockSpan([5, 4, 3, 2, 1]));
console.log("Stock prices [5, 4, 3, 2, 1]");
console.log(stockSpan([5, 4, 3, 2, 1]));
console.log("Stock prices [1, 2, 3, 1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 7, 6, 5]");
console.log(stockSpan([1, 2, 3, 1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 7, 6, 5]));
console.log("Stock prices [1]");
console.log(stockSpan([1]));
console.log("Stock prices []");
console.log(stockSpan([]));