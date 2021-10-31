function flattenAndSort(array) {

    return flat(array).sort((a, b) => a - b);
}
function flat(array) {
    return array.reduce((a, b) => Array.isArray(b) ? a.concat(flat(b)) : a.concat(b), [])
}
