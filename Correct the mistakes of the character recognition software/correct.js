function correct(string) {
    return string.split('').map(l => {
        if (l == "5") l = "S"
        if (l == "0") l = "O"
        if (l == "1") l = "I"
        return l
    }).join('')
}