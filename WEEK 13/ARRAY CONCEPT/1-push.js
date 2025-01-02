let arr = [1, 2, 3, 4, 5];

function pushInsert(arr, ...inputs) {
    for (let i = 0; i < inputs.length; i++) {
        arr[arr.length] = inputs[i];
    }
    return arr;
}

// console.log(pushInsert(arr, 6, 7, 8, 9, 10, 'jasim ', 'ihsan', null, undefined));

// ---------------------- using recursion ----------------------- //

function pushInserts(arr, index = 0, ...inputs) {
    // console.log('index : ', index)

    if (index === inputs.length) {
        console.log(index)
        // console.log(index, inputs.length - 1);
        return arr;
    }

    arr[arr.length] = inputs[index];

    return pushInserts(arr, index + 1, ...inputs);
}


console.log(pushInserts(arr, 0, 6, 7, 8, 9, 10, 'jasim ', 'ihsan', null, undefined));
