function isIsogram(str) {
    str = str.toLowerCase();
    return new Set(str).size == str.length;
}

/* -------------------------------------------------------------------- */

function isIsogram(str) {
    str = str.toLowerCase();
    const count = {}
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (!count[letter]) {
            count[letter] = 1
        } else {
            return false
        }

    }
    return true
}