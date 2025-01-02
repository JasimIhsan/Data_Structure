const factorial = (num) => {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        
        fac = fac * i;
    }
    return fac;
};

// console.log(factorial(5));

// BIG - O ==> O(n)


//-------------------- recursive ------------------//

const recFactorial = (num) => {
    if(num == 1) return 1
    return num * recFactorial(num-1)
}

console.log(recFactorial(5));
