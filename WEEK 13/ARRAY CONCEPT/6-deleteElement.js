function deleteElement(arr, position) {
    let index = position - 1;
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            for (let j = index; j < array.length; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
            return arr;
        }
    }
}

let array = [1, 2, 3, 4, 5];
console.log(deleteElement(array, 4));
