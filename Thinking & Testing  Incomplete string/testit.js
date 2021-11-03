function testit(s) {
    //return s?
    //return s.substr(0,1) ?
    //return s.substr(0,s.length/2) ?
    const l = Math.ceil(s.length / 2)
    return s ? s.substr(0, l) : ""
}