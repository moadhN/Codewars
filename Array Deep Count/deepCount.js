function deepCount(array) {
    const stuck = [...array]
    const rest = [];
    let count = 0
    while (stuck.length > 0) {
        const current = stuck.shift()

        if (Array.isArray(current)) {
            count++
            stuck.push(...current)
        } else {
            rest.push(current)
        }
    }
    return rest.length + count

}


/* --------------------------------------------------------------------------------------------------------- */

function deepCount(array) {
    return array.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), array.length);
}