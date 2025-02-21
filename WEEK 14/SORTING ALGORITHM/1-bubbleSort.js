const bubbleSort = (arr) => {
    let swapped = null;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};

console.log(bubbleSort([2, 49, -5, 8, 67, -57])); // [ -57, -5, 2, 8, 49, 67 ]
