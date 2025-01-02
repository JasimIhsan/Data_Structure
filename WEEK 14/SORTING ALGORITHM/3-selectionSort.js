function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        //swap
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    console.log(arr);
}

let array = [29, 10, 14, 37, 13];
selectionSort(array);
