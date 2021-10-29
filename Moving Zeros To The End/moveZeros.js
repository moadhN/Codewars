const moveZeros = function (arr) {

    const count = arr.filter(x => x === 0).length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < count; i++) {
        arr.push(0)
    }
    return arr
}