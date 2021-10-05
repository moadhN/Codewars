function lifePathNumber(dateOfBirth) {
    let num = dateOfBirth.split('-').join('');
    do {
        num = ('' + num).split('').reduce((a, b) => +a + +b);
    } while (num > 9)

    return num;
}

/* --------------------------------------------------------------------------------------------------------- */

function lifePathNumber(dateOfBirth) {
    console.log(dateOfBirth)
    return dateOfBirth.replace(/\D/g, '') % 9 || 9;
}

/* --------------------------------------------------------------------------------------------------------- */

function lifePathNumber(dateOfBirth) {
    let y = [], m = [], d = [], lifenumY = 0, lifenumM = 0, lifenumD = 0, lifenum = 0;
    dateOfBirth = dateOfBirth.split('-')
    y = dateOfBirth[0]
    m = dateOfBirth[1]
    d = dateOfBirth[2]
    do {
        lifenumY = sum(y)
        y = lifenumY + ''
    } while (lifenumY > 9)
    do {
        lifenumM = sum(m)
        m = lifenumM + ''
    } while (lifenumM > 9)
    do {
        lifenumD = sum(d)
        d = lifenumD + ''
    } while (lifenumD > 9)
    lifenum = lifenumY + lifenumM + lifenumD
    while (lifenum > 9) {
        string = lifenum + ''
        lifenum = sum(string)

    }
    return lifenum
}

function calc(num) {
    let sum = 0;

    sum = num.split('').map(function (a) {
        return parseInt(a, 10);
    });

    return sum
}


function sum(x) {
    return calc(x).reduce((a, b) => a + b)
}