function validateWord(s) {
    let list = {}
    for (let i of s) {
        if (!Object.keys(list).includes(i)) {
            list[i] = 0;
        } else {
            list[i] += 1
        }
    }
    return list
}