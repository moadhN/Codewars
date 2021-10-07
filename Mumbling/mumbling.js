function accum(s) {
    s = s.toLowerCase()
    let string = '';
    let num;
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let l = 0;
        stirng = s[i];
        string = stirng.toUpperCase();
        while (l < i) {
            string += stirng;
            l++
        }
        result += string + '-'
    }
    return result.slice(0, -1)
}

/* --------------------------------------------------------------------------------------------------------- */

function accum(s) {
    return s.split('').map((letter, index) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(index)
    }).join('-')
}