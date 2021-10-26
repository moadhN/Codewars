function balancedNum(number) {
    if (number < 100) return 'Balanced'
    let l = 0;
    let strNumb = number.toString()
    if (strNumb.length % 2 == 0) {
        l = (strNumb.length / 2) - 1
    } else {
        l = Math.floor(strNumb.length / 2)
    }
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < l; i++) {
        sumLeft += Number(strNumb[i])
    }
    strNumb = strNumb.split('').reverse().join('')

    for (let i = 0; i < l; i++) {
        sumRight += Number(strNumb[i])
    }

    if (sumLeft === sumRight) return 'Balanced'
    return "Not Balanced"
}
/* --------------------------------------------------------------------------------------------------------- */


function balancedNum(number) {
    if (number < 100) return 'Balanced'
    let l = 0;
    const strNumb = number.toString()
    if (strNumb.length % 2 == 0) {
        l = (strNumb.length / 2) - 1
    } else {
        l = Math.floor(strNumb.length / 2)
    }
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < l; i++) {
        sumLeft += Number(strNumb[i])
    }
    let j = 0
    for (let i = strNumb.length - 1; j < l; i--) {
        sumRight += Number(strNumb[i])
        j++
    }

    if (sumLeft === sumRight) return 'Balanced'
    return "Not Balanced"
}


