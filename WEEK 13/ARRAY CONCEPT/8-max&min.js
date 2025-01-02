function maxAndMin(arr) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return {'min': min, 'max': max};
}

let array = [1, 2, 3, 4, 5]
console.log(maxAndMin(array))