function onesCounter(input) {
    return (input.join('').match(/(1)+/g) || []).map(one => one.length)
}

/* ---------------------------------------------------------------------------------------------------- */

function onesCounter(input) {
    return input.join('').split(0).map(n => n.length).filter(n => n)
}