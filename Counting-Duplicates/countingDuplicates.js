function duplicateCount(text) {


    let count = 0;
    for (let i = 0; i < text.length; i++) {
        regx = new RegExp(text[i], 'gi')

        if (text.match(regx).length > 1) {
            count++
            text = text.replace(regx, '')
            i = 0;
        }

    }

    return count;
}