function reduce(fraction) {
    const array = [...newArray(fraction)]
    const a = array[0];
    const b = array[1]
    const num = pgcd(a, b)
    array[0] = a / num
    array[1] = b / num
    return array
}

function pgcd(a, b) {
    return a % b == 0 ? b : pgcd(b, a % b)
}
function newArray(arr) {
    return Array.isArray(arr) ? arr.reduce((a, b) => a.concat(newArray(b)), []) : arr
}