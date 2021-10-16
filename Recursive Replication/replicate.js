function replicate(times, number, array = []) {
    return times <= 0 ? array : replicate(times - 1, number, array.concat(number))
}

/* --------------------------------------------------------------------------------------------------------- */

function replicate(times, number) {
    return times > 0 ? [number, ...replicate(times - 1, number)] : [];
}
/* --------------------------------------------------------------------------------------------------------- */

function replicate(times, number) {
    return times > 0 ? Array(times).fill(number) : [];
}