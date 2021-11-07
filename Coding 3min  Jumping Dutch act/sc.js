function sc(floor) {
    let str = ""
    if (floor > 1) {
        str = "Aa~ ".repeat(floor - 1) + "Pa!"
        if (floor <= 6) {
            str += " Aa!"
        }
    }
    return str
}