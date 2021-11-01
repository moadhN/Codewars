function rowSumOddNumbers(n) {
    const sum = (n * (n - 1)) / 2;
    const array = []
    let j = 0;
    let i = 0;
    while (i < sum) {
        if (j % 2 == 1) {
            i++
        }
        j++
    }
    j += 1;
    while (array.length < n) {
        array.push(j)
        j += 2
    }

    return array
}

