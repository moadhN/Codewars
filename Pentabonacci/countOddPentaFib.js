function countOddPentaFib(n, arr = [], list = { 0: 0, 1: 1, 2: 1, 3: 2, 4: 4 }) {
    //const f5 = f(n - 5)
    //const f4 = f(n - 4)
    //const f3 = f(n - 2)
    //const f2 = f(n - 3)
    //const f1 = f(n - 1)
    if (f5 % 2 == 1 && arr.indexOf(f5) == -1) arr.push(f5)
    if (f4 % 2 == 1 && arr.indexOf(f4) == -1) arr.push(f4)
    if (f3 % 2 == 1 && arr.indexOf(f3) == -1) arr.push(f3)
    if (f2 % 2 == 1 && arr.indexOf(f2) == -1) arr.push(f2)
    if (f1 % 2 == 1 && arr.indexOf(f1) == -1) arr.push(f1)
    return n === 5 ? arr.length : countOddPentaFib(n - 1, arr)
}

function f(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (n === 2) return 1
    if (n === 3) return 2
    if (n === 4) return 4
    if (n > 4) return f(n - 1) + f(n - 2) + f(n - 3) + f(n - 4) + f(n - 5)
}
