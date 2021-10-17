function realSize(arrays) {
    const stuck = [...arrays]
    let count = 0;
    while (stuck.length) {
        const lastItem = stuck.pop();
        if (Array.isArray(lastItem)) {
            stuck.push(...lastItem)
        } else {
            count++
        }
    }
    return count;
}
/* -------------------------------------------------------------------------------------------------------- */


const realSize = arr => arr.reduce((a, e) => a + (Array.isArray(e) ? realSize(e) : 1), 0);


