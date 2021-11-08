function pigIt(str) {
    return str.split(' ').map(letter => ((/[a-zA-Z]+/g).test(letter) ? letter.slice(1) + letter.slice(0, 1) + "ay" : letter)).join(" ")
}