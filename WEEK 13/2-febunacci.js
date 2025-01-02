// Imagine you have a staircase with numbers, and each step is the sum of the two steps before it.
// It starts like this:
// 0 (at the bottom)
// 1 (first step)
// 1 (second step, because 0 + 1 = 1)
// 2 (third step, because 1 + 1 = 2)
// 3 (fourth step, because 1 + 2 = 3)
// 5 (fifth step, because 2 + 3 = 5)
// 8 (sixth step, because 3 + 5 = 8)
// 13 (seventh step, because 5 + 8 = 13)
// And so on...

const fib = (num) => {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        // arr.push(arr[i - 1] + arr[i - 2]);
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
};

// console.log(fib(5));

// -------------- recursion O(2^n) - exponenstial ------------------- //

const recFib = (num) => {
    if (num < 2) return num;
    return recFib(num - 1) + recFib(num - 2);
};

// console.log(recFib(0));
// console.log(recFib(1));
console.log(recFib(5));


