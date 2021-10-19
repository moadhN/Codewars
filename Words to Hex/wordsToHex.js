function wordsToHex(words) {
    const newHexCodeArray = [];
    const wordsArray = words.split(' ')

    for (let i of wordsArray) {
        let hexCode = '#'
        i = i.substr(0, 3)

        for (let j = 0; j < i.length; j++) {
            hexCode += i[j].charCodeAt().toString(16)
        }

        while (hexCode.length < 6) {
            hexCode += '00'
        }
        newHexCodeArray.push(hexCode)
    }

    return newHexCodeArray
}
