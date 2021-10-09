function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] == undefined) {
            return null
        } else if (arr[i + 1] - arr[i] != 1) {
            return arr[i + 1]
        }
    }
}

/* --------------------------------------------------------------------------------------------------------- */


function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != 1) {
            return arr[i + 1]
        }
    }
    return null
}