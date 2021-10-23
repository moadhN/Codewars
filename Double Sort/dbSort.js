function dbSort(a) {
    const numberArray = [],
        stringArray = [];
    for (const char of a) {
        if (typeof char == 'number') {
            numberArray.push(char);
        } else {
            stringArray.push(char)
        }
    }
    numberArray.sort((a, b) => a - b)
    stringArray.sort()
    return numberArray.concat(stringArray)
}