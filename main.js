function sum(a,b,...args){// rest operator
    let numSum = 0;
    let product = a * b;
    for(const arg of args){
    numSum+=arg;
    
    }
    return [product,numSum];
    
}
    
console.log(sum(2, 4, 5, 6, 1, 10, 7)); // the first 2 digits are ignored as they are considered a & b. Only the args are added.