const sumNested = arr => {
    const stuck = [...arr];
    let sum = 0;
    while (stuck.length) {
        const lastItem = stuck.pop()
        if (Array.isArray(lastItem)) {
            stuck.push(...lastItem)
        } else {
            sum += lastItem
        }
    }
    return sum
};


/* --------------------------------------------------------------------------------------------------------- */

const sumNested = arr => {
    if (Array.isArray(arr)) {
        return arr.reduce(function (accumulator, currentValue) {
            return accumulator + sumNested(currentValue);
        }, 0);
    } else {
        return arr;
    }
};

/*-----------------------------------------------------------------------------------------------------------*/


const sumNested = arr => arr.reduce(
    (a, b) => a + (Array.isArray(b) ? sumNested(b) : b)
    , 0);