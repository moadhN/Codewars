function sumPairs(ints, s) {
    const list = {};
    for (let i = 0; i < ints.length; i++) {
        const element = ints[i];
        const need = s - element;
        if (list[need]) {
            return [need, element];
        } else {
            list[element] = true;
        }

    }
}
/* -------------------------------------------------------------------------------------------------------------------------------- */



function sumPairs2(ints, s) {
    const list = {};
    for (let i = 0; i < ints.length; i++) {
        const element = ints[i];
        const need = s - element;
        if (list[need]) {
            return [need, element];
        } else {
            list[element] = true;
        }

    }
}