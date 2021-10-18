function arraySum(arr) {
    return arr.reduce((a, b) => Number(a) + (Array.isArray(b) ? arraySum(b) : typeof b == 'number' ? b : ''), 0)
}
