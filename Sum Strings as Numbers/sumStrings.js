function sumStrings(a, b) {
    a = a.replace(/^0+/, '')
    b = b.replace(/^0+/, '')
    const rversA = a.split('').reverse().join('');
    const rversB = b.split('').reverse().join('');
    let rest = 0;
    let finalresult = ''
    let lng = rversA.length > rversB.length ? rversA.length : rversB.length
    for (let i = 0; i < lng; i++) {
        const aNumber = rversA[i] || 0
        const bNumber = rversB[i] || 0
        const sum = Number(aNumber) + Number(bNumber) + rest;

        rest = Math.trunc(sum / 10);
        finalresult += (sum % 10) + ""

        if (i + 1 === lng && rest != 0) {
            finalresult += rest + ""
        }
    }

    return finalresult.split('').reverse().join('')
}
/* -------------------------------------------------------------------------------------------------------------------------------- */

function sumStrings(a, b) {
    return (BigInt(a) + BigInt(b)).toString()
}













