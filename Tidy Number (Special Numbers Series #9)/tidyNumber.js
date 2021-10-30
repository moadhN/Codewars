function tidyNumber(n) {
    return n.toString().split('').every((e, i, arr) => {
        if (arr[i + 1] == undefined) return true
        return (arr[i + 1] >= e)
    })
}
console.log(tidyNumber(12))