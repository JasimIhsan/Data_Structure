function insertElement(arr, element, position) {
    let index = position - 1;
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
    return arr;
}

const array = [1, 2, 3, 4, 5];
console.log(insertElement(array, 10, 3));
