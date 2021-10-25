const number = function (array) {
    return array.map((item, index) => `${index + 1}:$${item}`)
}
/* -------------------------------------------------------------------------------------- */
const number = function (array) {
    const finalArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const num = i + 1;
        const finalItem = `${num}: ${currentItem}`
        finalArray.push(finalItem)
    }
    return finalArray
}