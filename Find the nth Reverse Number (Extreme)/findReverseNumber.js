function findReverseNumber(n) {
    let i = 0;
    let reversedNum = '';
    while (n > 0) {
        if ((i + "") == (i + "").split('').reverse().join('')) {
            n -= 1;
            reversedNum += i + ' '
            i++
        }
        else {
            i++
        }
    }
    return reversedNum.split(' ')[reversedNum.split(' ').length - 2];
}
console.log(findReverseNumber(20))