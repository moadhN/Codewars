function squareDigits(num) {
    return Number((num + "").split("").map(n => n ** 2).join(''))
}
