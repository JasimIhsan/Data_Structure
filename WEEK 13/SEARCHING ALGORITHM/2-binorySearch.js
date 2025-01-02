// const binorySearch = (arr, target) => {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         }

//         if (arr[middleIndex] < target) {
//             leftIndex = middleIndex + 1;
//         } else {
//             rightIndex = middleIndex - 1;
//         }
//     }

//     return -1;
// };

const binorySearch = (array, target) => {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === array[middleIndex]) return middleIndex;
        if (target < array[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1
};

// num reducing to half in each iteration

// console.log(binorySearch([-5, 2, 4, 6, 8, 10], 10));
// console.log(binorySearch([-5, 2, 4, 6, 8, 10], -5));
// console.log(binorySearch([-5, 2, 4, 6, 8, 10], 6));

// ------------------------- recursive binory search -----------------------------//

function recBinorySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) {
        return middleIndex;
    }

    if (arr[middleIndex] < target) {
        return search(arr, target, middleIndex + 1, rightIndex);
    } else {
        return search(arr, target, leftIndex, middleIndex - 1);
    }
}

console.log(recBinorySearch([-5, 2, 4, 6, 8, 10], 10));
// console.log(recBinorySearch([-5, 2, 4, 6, 8, 10], -5));
// console.log(recBinorySearch([-5, 2, 4, 6, 8, 10], 6));
