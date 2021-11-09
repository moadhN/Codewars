function sumStrings(a, b) {
    //const result = Number(a) + Number(b)
    //console.log(Number(a).toPrecision(99))
    //console.log(Number(b).toPrecision(99))

    //return result.toExponential()
    const rversA = a.split('').reverse().join('');
    const rversB = b.split('').reverse().join('');
    const sameArray = [rversA, rversB]
    let rest = 0;
    let finalresult = ''
    for (let i = 0; (i < (rversA.length > rversB.length ? rversA : rversB)); i++) {
        const aNumber = rversA[i] || 0
        const bNumber = rversB[i] || 0

    }

    //return finalresult
}
console.log(sumStrings("712569312664357328695151392", "8100824045303269669937"))//712577413488402631964821329
/*    const sum = Number(i)+Number(j)+rest
        rest = Math.trunc(sum)
        finalresult += (sum % 10) + '' */