function validParentheses(parens) {
    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}'
    },
        arr = [];
    for (let char of parens) {
        if (bracket[char]) {
            arr.push(bracket[char])
        } else {
            if (arr.pop() !== char) return false
        }
    }
    return (!arr.length)
}