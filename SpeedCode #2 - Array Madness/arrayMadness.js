function arrayMadness(array1, array2) {
    const sumOne = array1.reduce((a, b) => a + b ** 2, 0)
    const sumTow = array2.reduce((a, b) => a + b ** 3, 0)
    return sumOne > sumTow
}