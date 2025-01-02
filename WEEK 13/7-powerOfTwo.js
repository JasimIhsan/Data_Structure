const powerOfTwo = function (num) {
    if (num < 1) return false;

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num = num / 2;
    }

    return true;
};

// console.log(powerOfTwo(1));
// console.log(powerOfTwo(2));
// console.log(powerOfTwo(5));

// BIG-O ==> O(log n)

// num reducing to half in each iteration


// --------------------- O(1) --------------//

const powerOfTwoBitwise = function (num){
    if(num < 1 ) return false;

    return (num & (num - 1)) === 0
}

console.log(powerOfTwoBitwise(1));
console.log(powerOfTwoBitwise(2));
console.log(powerOfTwoBitwise(5));