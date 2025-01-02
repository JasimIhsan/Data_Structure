let arr = [1, 2, 3, 4, 5];

function popLast(arr) {
    let lastIndex = arr.length - 1;
    let removedElement = arr[lastIndex];
    arr.length = lastIndex;

    return removedElement
}

console.log('Popped element : ', popLast(arr));
console.log(arr);

