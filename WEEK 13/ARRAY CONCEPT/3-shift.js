let arr = [1, 2, 3, 4, 5];

function customShift(arr) {
    if (arr.length === 0) return undefined
    let firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }


    arr.length = arr.length - 1
    return firstElement;
}

// console.log(customShift(arr));
// console.log(arr);
// console.log(customShift(arr));
// console.log(arr);
// console.log(customShift(arr));
// console.log(arr);
// console.log(customShift(arr));
// console.log(arr);
// console.log(customShift(arr));
// console.log(arr);
// console.log(customShift(arr));
// console.log(arr);




