var primeFactors = function(n) {
    var output = "";
    while(!(n&1)) {
        output += 2 + " ";
        n /= 2;
    }
    
    for(let i = 3; i < Math.sqrt(n); i+= 2) {
        while(n%i === 0) {
            n /= i;
            output += i + " ";
            break;
        }
    }
    
    if(n > 2)
        output += n + " ";
    console.log(output);
}

primeFactors(14);
primeFactors(1024);
primeFactors(1023);
primeFactors(64342100);
primeFactors(51261232);