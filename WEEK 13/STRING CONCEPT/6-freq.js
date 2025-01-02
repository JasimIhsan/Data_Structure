function freq(str, char, index = 0, count = 0) {
    if (index === str.length) {
        return count;
    }
    if (str[index] === char) {
        count++;
    }
    return freq(str, char, index + 1, count)
}

console.log(freq('Hello World', 'l'))