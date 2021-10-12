const countBits = function (n) {
    return n < 0 ? '' : n.toString(2).split('').filter(num => num == 1).length
}