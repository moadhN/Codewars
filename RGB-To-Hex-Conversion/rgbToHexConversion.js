function adj(v) {
    if (v <= 0) return v = 0
    if (v > 255) return v = 255
    else return v

}
function len(v) {
    while (v.length < 2) {
        v = '0' + v
    }
    return v
}
function rgb(r, g, b) {

    r = adj(r).toString(16).toUpperCase();
    g = adj(g).toString(16).toUpperCase();
    b = adj(b).toString(16).toUpperCase();

    r = len(r)
    g = len(g)
    b = len(b)

    return (`${r}${g}${b}`)
}