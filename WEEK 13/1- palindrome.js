function isPalindrome(input) {
    if (typeof input == "number") {
        if (input < 0) return false;
        input = input.toString();
    } else {
        input = input.toLowerCase();
    }

    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        if (input[start] !== input[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // true


// -------------------------- using recurision ---------------------------- //
//
// function isPalindromeRec(input) {
//     if (typeof input == "number") {
//         if (input < 0) return false;
//         input = input.toString();
//     } else {
//         input = input.toLowerCase();
//     }
//
//     function check(start, end) {
//         if (start >= end) return true;
//         if (input[start] !== input[end]) return false;
//         return check(start + 1, end - 1)
//     }
//
//     return check(0, input.length - 1);
// }
//
// console.log(isPalindromeRec("madam")); // true
// console.log(isPalindromeRec("hello")); // false
// console.log(isPalindromeRec("racecar")); // true
// console.log(isPalindromeRec("level")); // true
// console.log(isPalindromeRec(121)); // true
// console.log(isPalindromeRec(-121)); // false
