function numPrimorial(n) {
    if (n <= 2) return 2
    let result = 2;
    let count = 0;
    let i = 0;
    while (count < n) {
        i++
        if (primorial(i)) {
            result *= i
            i++
            count++
        } else {
            i++
        }
    }
    return result
}
function primorial(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return null
    }
    return number
}