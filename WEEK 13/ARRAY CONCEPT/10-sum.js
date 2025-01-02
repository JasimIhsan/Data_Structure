function summer(arr, index = 0, sum = 0) {
    if (index === arr.length) {
        return sum;
    }
    sum += arr[index];
    return summer(arr, index + 1, sum);
}

console.log(summer([10, 20, 30, 50, 100]));