function spinWords(str) {
    let result = '';
    str.split(' ').map((x) => {
        if (x.length >= 5) {
            x = x.split('').reverse().join('');
            result += x + ' '
        } else {
            result += x + ' '
        }
        return result
    })
    return result.trim()
}