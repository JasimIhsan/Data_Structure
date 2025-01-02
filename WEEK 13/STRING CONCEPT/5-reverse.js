// ---------------------------- Built-In Method --------------------------------- //

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello World'));

// ------------------------------ Using for Loop ------------------------------- //

function revString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(revString('Hello World'));

// ------------------------------ Using Recursion ------------------------------- //

function recRevString(str, index = 0) {
    if (index === str.length) {
        return '';
    }
    return recRevString(str, index + 1) + str[index];

}

console.log(recRevString('Hello World'));