// return the magic index
function findMagic(arr) {
    for (let i = 0; i < arr; i++) {
        console.log(arr[i])
        if (arr[i] == i) return arr[i];
    }
    return -1
}

/* --------------------------------------------------------------------------------------------------------- */
const findMagic = arr => arr.findIndex(i => arr[i] === i)