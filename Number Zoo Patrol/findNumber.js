function findNumber(array) {
    if (array == 0) return 1
    for (let i = 1; i < Infinity; i++) {
        if ((array.indexOf(i) == -1)) return (i)
    }
    return max + 1
}