function findOutlier(integers) {
    let even = integers.filter(e => e % 2 == 0)
    let odd = integers.filter(o => o % 2 !== 0)
    return even.length == 1 ? even[0] : odd[0]
}

/* ------------------------------------------------------------------------------------------------------ */

function findOutlier(integers) {
    let even = 0, odd = 0;
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 == 0) {
            even++
        } else {
            odd++
        }
    }
    if (even > odd) return check(integers, 1)
    else return check(integers, 0)
}
function check(integers, test) {
    for (let i of integers) {

        if (Math.abs(i) % 2 == test)
            return i
    }

}
