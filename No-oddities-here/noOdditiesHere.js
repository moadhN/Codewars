const noOdds = values => values.filter(val => !(val % 2));
/* --------------------------------------------------------------------------------------------------------- */

function noOdds(values) {
    let myArray = [];
    for (let i = 0; i < values.length; i++) {
        let n = values[i]
        if (n % 2 == 0) {
            myArray.push(n)
        }
    }
    return myArray
}