function customCharAt(string, index){
    if(index < 0 || string.length < index){
        return '';
    }

    return string[index];
}

console.log(customCharAt('hello', 1));

