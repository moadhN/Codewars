function XO(str) {
    //code here
    let x = 0,
        o = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            x++
        } else if (str[i] == 'o') {
            o++
        }
    } if (x == o) {
        return true
    }
    else return false

}