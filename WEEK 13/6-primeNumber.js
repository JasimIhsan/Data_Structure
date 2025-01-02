// Math.sqrt(prime)

// prime 100 => time 10
// prime 1000 => time 100
// prime 10000 => time 1000 

// ------------------------------------- //
//      Optimized Primality Test 
// ------------------------------------- //

// Integers larger than the square root do not need to be checked because, whenever n = a * b, one of the two factors a and b is less than or equal to the square root of n.

// n = 24, a = 4 and b = 6
// The square root of 24 is 4.89
// 4 is less than 4.89
// a is less than the square root of n

// n = 35, a = 5 and b = 7
// The square root of 35 is 5.91
// 5 is less than 5.91
// a is less than the square root of n

const isPrime =  function(prime){
    let isPrime = true;
    if(prime < 2) return false;
    for (let i = 2; i <= Math.sqrt(prime); i++) {
        if(prime % i == 0){
            isPrime = false;
        }
    }
    return isPrime
}

console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(1));


// BIG-O ==> O(n)



