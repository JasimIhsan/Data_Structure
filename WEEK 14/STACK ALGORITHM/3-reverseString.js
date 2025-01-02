function reverseString (input) {
    const stack = [];
    for(let char of input){
        stack.push(char)
    }
    let reversed = '';
    while(stack.length > 0){
        reversed += stack.pop();
    }
    console.log('Reversed String ---->>>> ', reversed.trim());
    
}

reverseString('    Jasim Ihsan M    ')
reverseString('Rahil Sardar')