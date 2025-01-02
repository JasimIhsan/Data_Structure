function customReverse(arr) {
    let revArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        // revArray.push(arr[i]);
        customPush(revArray, arr[i]);
    }
    return revArray;
}

function customPush(arr, element) {
    arr[arr.length] = element;

    return arr;
}

let array = [1, 2, 3, 4, 5];
// console.log(customReverse(array));


// -------------------------- using Recursion ----------------------------- //

function recReverse(arr, index = 0, revArray = []) {
    if (index === arr.length) {
        return revArray;
    }
    revArray[revArray.length] = arr[arr.length - 1 - index];
    return recReverse(arr, index + 1, revArray);
}

console.log(recReverse(array));