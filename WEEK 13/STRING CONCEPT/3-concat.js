function customConcat(...strings) {
    let result = ''
    for (const str of strings) {
        result += str;
    }

    return result;
}

console.log(customConcat('Jasim', ' Ihsan' , ' M'));
