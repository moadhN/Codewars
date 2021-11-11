const maxSequence = function (arr) {
    let max = arr[0] || 0;
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        let nextValue = arr[i + 1] || 0
        max = Math.max(currentValue, (max + nextValue))
    }
    return max <= 0 ? 0 : max
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-9, -30, -13, 24, -33, -28, 40, -6, 1, -19, 96, 46, 16, 26, 35, -41, 27, -23, 14, -29, 11, -6, 45, 2316, -25, 35, -11, -4, 9, -22, -31, 23, 13, 46, -9, 33, 39, -7, 6, -25, -2, 2, 34, 49]))