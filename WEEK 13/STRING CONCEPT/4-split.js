// function customSplit(string, separator) {
//     let result = [];
//     let temp = "";

//     for (const char of string) {
//         if (char === separator) {
//             customPush(result, temp);
//             temp = "";
//         } else {
//             temp += char;
//         }
//     }
//     console.log(result);
//     customPush(result, temp);

//     return result;
// }

// function customPush(arr, ...inputs) {
//     for (let i = 0; i < inputs.length; i++) {
//         arr[arr.length] = inputs[i];
//     }
//     return arr;
// }

function customSplit(string, separator) {
    let result = [];
    let temp = '';
    for (const char of string) {
        if(char === separator){
            customPush(result , temp);
            temp = '';
        } else {
            temp += char;
        }
    }
    customPush(result, temp)
    return result
}

function customPush(arr, ...inputs){
    for (let i = 0; i < inputs.length; i++) {
        arr[arr.length] = inputs[i];
    }
    return arr;
}

console.log(customSplit("apple,banana,orange", ","));
