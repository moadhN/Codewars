function happyNumbers(a) {
    const happyNumbersArray = []
    for (let i = 1; i <= a; i++) {
        if (isHappyNum(i)) {
            happyNumbersArray.push(i)
        }
    }
    return happyNumbersArray
}


function isHappyNum(a, array = [a]) {
    if (a == 1) return true
    const numStr = a + ''
    const newItem = numStr.split('').map(item => item * item).reduce((a, b) => a + b, 0)
    if (array.indexOf(newItem) != -1) return false
    array.push(newItem)

    return isHappyNum(newItem, array)
}