function arrayDiff(arrayA, [x, ...arrayB]) {
    arrayA = arrayA.filter(item => x != item)
    return arrayB == '' ? arrayA : arrayDiff(arrayA, arrayB)

}