function sym(arr1, arr2, ...args) {
    const arr = []
    arr.push(...arr1.filter(n => arr2.indexOf(n) == -1))
    arr.push(...arr2.filter(n => arr1.indexOf(n) == -1))
    if (args == "") {
        return [... new Set(arr)].sort((a, b) => a - b)
    }
    return sym(arr, ...args)
}


/* -------------------------------------------------------------------------------------------------------------------------------- */

function sym() {
    const args = [];
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
    }

    function symDiff(arr1, arr2) {
        const result = []

        arr1.forEach(e => { if (arr2.indexOf(e) == -1 && result.indexOf(e) == -1) result.push(e) })
        arr2.forEach(e => { if (arr1.indexOf(e) == -1 && result.indexOf(e) == -1) result.push(e) })

        return result
    }
    return args.reduce(symDiff)

}


/* ----------------------------------------------------- */


function sym() {
    const args = Array.prototype.slice.call(arguments)
    const getDiff = (arr1, arr2) => {
        function filterFunction(arr1, arr2) {
            return arr1.filter(item => arr2.indexOf(item) === -1)
        }
        return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1))
    }
    const summary = args.reduce(getDiff)
    const result = []
    for (let i = 0; i < summary.length; i++) {
        const currentValue = summary[i];
        if (result.indexOf(currentValue) == -1) {
            result.push(currentValue)
        }
    }
    return result
}
