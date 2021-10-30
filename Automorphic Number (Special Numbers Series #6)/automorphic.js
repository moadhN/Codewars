function automorphic(n) {
    const regex = new RegExp(`${n}$`, "g")
    squarStr = (n ** 2).toString()
    if (regex.test(squarStr)) return "Automorphic"
    return "Not!!"
}

/* ---------------------------------------- */
function automorphic(n) {
    squarStr = (n ** 2).toString();
    nStr = n.toString();
    if (nStr === squarStr.slice(-nStr.length)) return "Automorphic"
    return "Not!!"
}