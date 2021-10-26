function strong(n) {
    const facNumb = n.toString().split('')
        .map(numb => factorial(numb))
        .reduce((a, b) => a + Number(b), 0)
    return facNumb == n ? "STRONG!!!!" : "Not Strong !!"
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1)
}