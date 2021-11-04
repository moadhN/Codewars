const number9 = (n) => {
    let str = ''
    for (let i = 0; i <= n; i++) {
        str += i

    }
    return str.match(/9/g).length

}
console.log(number9(1))