function isBalanced(expression) {
    let stack = [];
    let pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let char of expression) {
        if (["{", "[", "("].includes(char)) {
            stack.push(char);
        } else if(['}',']',')'].includes(char) && pairs[char] !== stack.pop()){
            return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
