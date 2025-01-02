function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    console.log("left : ", [left], "  right : ", right);

    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray, ...left, ...right];
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1]));
