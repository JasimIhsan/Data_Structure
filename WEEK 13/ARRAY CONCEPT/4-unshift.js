// let arr = [1, 2, 3, 4, 5];

function customUnshift(arr, ...inputs) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + inputs.length] = arr[i];
    }
    for (let i = 0; i < inputs.length; i++) {
        arr[i] = inputs[i];
    }
    return arr
}

// console.log(customUnshift(arr, 9, 8, 7, 6, 5));

// ----------------------- using recursion ----------------------- //

let arr = [1, 2, 3, 4, 5];

function recUnshift(arr, ...inputs) {
    function insertElements(arr, index) {
        if (index === inputs.length) {
            return arr;
        }
        for (let i = arr.length; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = inputs[index]
        return insertElements(arr, index + 1);
    }


    return insertElements(arr, 0)
}

console.log(recUnshift(arr, 9, 8, 7, 6, 5))

