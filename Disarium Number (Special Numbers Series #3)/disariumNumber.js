function disariumNumber(n) {
    return (n.toString().split('').map((numb, index) => pow(numb, index + 1)).reduce((a, b) => a + Number(b), 0)) == n ? "Disarium !!" : "Not !!"
}


function pow(n, p) {
    return p == 0 ? 1 : n * pow(n, p - 1)
}