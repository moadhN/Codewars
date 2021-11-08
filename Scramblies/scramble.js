function scramble(str1, str2) {
    //code me
    const object = {};
    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i];
        object[letter] = object[letter] || 0;
        object[letter]++
    }
    for (let i = 0; i < str2.length; i++) {
        const element = str2[i];
        if (object[element] > 0) {
            object[element]--
        } else return false
    }
    return true
}

/* ------------------------------------------------------------------------------------------------- */
function scramble(str1, str2) {
    const list = {}
    for (let i of str2) {
        if (!list[i]) {
            list[i] = 1
        } else {
            list[i] += 1
        }
    }

    for (let i of str1) {
        if (list[i]) {
            list[i] -= 1
        }

    }
    for (let i of Object.values(list)) {
        if (i != 0) return false
    }
    return true
}