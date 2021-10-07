function solve(s) {
    return Math.max(...s.replace(/[aeiou]+/g, ' ').trim().split(' ').map(addUpString));
}


function charToValue(c) {
    return c.charCodeAt(0) - 96;
}
function addUpString(str) {
    return str.split('').map(charToValue).reduce((acc, item) => acc += item, 0);
}

/* --------------------------------------------------------------------------------------------------------- */

const stringToArray = (str) => {
    let sub = /[aeiou]/gi;
    return str.split(sub);
}
const arrayToArrays = (array) => {
    return array.map(item => {
        return item.split('')
    })
}
const letterToNumb = (letter) => {
    return letter.map(array => {
        return array.map(letter => {
            return letter.charCodeAt(0) - 96;
        })
    })
}
const calc = (arrays) => {
    return arrays.map(array => {
        return array.reduce((a, b) => {
            return a + b
        }, 0)
    })
}
const max = (numb) => {
    return numb.reduce((a, b) => {
        return Math.max(a, b)
    })
}



function solve(s) {
    return max(calc(letterToNumb(arrayToArrays(stringToArray(s)))));
};