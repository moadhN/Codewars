function well(array) {
    let goodCount = 0;
    const newFlatArray = floten(array)
    for (const item of newFlatArray) {
        if (typeof item != 'string') continue;

        if (item.toLowerCase() == 'good') goodCount++
    }

    if (goodCount == 0) return 'Fail!'
    if (goodCount == 1 || goodCount == 2) return 'Publish!'
    return 'I smell a series!'
}
function floten(arr) {
    return arr.reduce((current, prev) => Array.isArray(current) ? prev.concat(current) : arr, [])
}