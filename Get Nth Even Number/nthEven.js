function nthEven(n) {
    let i = 0;
    let count = 0;
    while (count < n) {
        if (i % 2 == 0) {
            count++
        }
        i++
    }
    return count
}