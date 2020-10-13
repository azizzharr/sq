const func = (n) => {
    if (n < 2){
        return n ;
    }
    return n*func(n-1)
}

console.log(func(5))