function numObj(s) {
    const finalArray = []
    for (const num of s) {
        const char = String.fromCharCode(num);
        const strnum = num + ''
        const item = {}
        item[`${strnum}`] = char
        finalArray.push(item)
    }
    return finalArray

}
console.log(numObj([118, 117, 120]))