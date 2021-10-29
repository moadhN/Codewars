function palindromeChainLength(n) {
    let revered = parseInt((n + '').split('').reverse().join(''));
    if (n != revered) {
        return 1 + palindromeChainLength(n + revered)
    }
    return 0;
}