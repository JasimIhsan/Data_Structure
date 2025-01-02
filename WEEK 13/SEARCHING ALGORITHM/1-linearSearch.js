const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
};

// BIG-O ==> O(n)

// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], 20));


const recLinearSearch = (array, target, index = 0) => {
    if (array.length === index) return -1;
    if (array[index] === target) return index;
    return recLinearSearch(array, target, index + 1);
};

console.log(recLinearSearch([-5, 2, 10, 4, 6], 10));
console.log(recLinearSearch([-5, 2, 10, 4, 6], 6));
console.log(recLinearSearch([-5, 2, 10, 4, 6], 20));

