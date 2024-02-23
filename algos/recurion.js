const findFibonacciNum=(n)=>{
    
    if (n < 2) {
        return n
    }
     return findFibonacciNum(n-1)+findFibonacciNum(n-2);
}
console.log(findFibonacciNum(4));
