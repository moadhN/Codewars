Array.prototype.sortReloaded = function (dir) {
    const sortedArray = [...this]
    sortedArray.sort((a, b) => a - b)
    if (dir === 'asc') return sortedArray;
    else if (dir === 'desc') return sortedArray.reverse()
    else if (dir == '' || dir == undefined || dir == '') return sortedArray;
    return false
}