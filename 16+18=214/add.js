function add(num1, num2) {
    const arrayNum1 = (num1 + '').split('').reverse()
    const arrayNum2 = (num2 + '').split('').reverse()
    const leng = arrayNum1.length < arrayNum2.length ? arrayNum1.length : arrayNum2.length
    const result = []
    for (let i = 0; i < leng; i++) {

        const sum = Number(arrayNum1[i]) + Number(arrayNum2[i])
        result.push(sum)
    }
    return result.reverse().join('')
}
