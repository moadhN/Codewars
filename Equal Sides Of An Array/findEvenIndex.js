function findEvenIndex(arr) {
    let leftSum = 0;
    if (arr.reduce((a, b) => a + b) === arr[0]) return 0
    else if (arr.reduce((a, b) => a + b) === arr[arr.length - 1]) return arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i]
        const skipedIndex = i + 1;
        const rightArray = arr.slice(skipedIndex + 1)
        if (rightArray == '') return -1
        const rightSum = rightArray.reduce((a, b) => a + b)
        if (rightSum === leftSum) return skipedIndex
    }
    return -1
}