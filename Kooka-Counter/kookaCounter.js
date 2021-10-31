const kookaCounter = function (laughing) {
    if (laughing == "") return 0
    const regex = new RegExp('h(?=H)|H(?=h)', 'g')
    if (laughing.split('a').join('').match(regex) == null) return 1
    return laughing.split('a').join('').match(regex).length + 1
}

/* -------------------------------------------------------------------------------------------------------- */

const kookaCounter = function (laughing, count = 0) {
    if (laughing == "") return count;
    const hStr = laughing.split('a').join('')
    let isUpper;

    console.log(hStr)
    if (hStr[0] === hStr[0].toUpperCase()) {
        isUpper = true
    } else {
        isUpper = false
    }
    if (isUpper) {
        for (let i = 1; i < hStr.length; i++) {
            if (hStr[i] != hStr[i].toUpperCase()) {
                count++
                return kookaCounter(hStr.slice(i), count)
            }
        }
    }
    if (!isUpper) {
        for (let i = 1; i < hStr.length; i++) {
            if (hStr[i] != hStr[i].toLowerCase()) {
                count++
                return kookaCounter(hStr.slice(i), count)
            }
        }
    }
    return count + 1;

}

/* --------------------------------------------------------------------------------------------------------- */

const kookaCounter = function (laughing) {
    return (laughing.match(/(Ha)+|(ha)+/g) || []).length
}