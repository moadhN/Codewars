function moveTen(s) {
    let codeAscii = 0,
        string = '';
    for (let i = 0; i < s.length; i++) {
        codeAscii = s.charCodeAt(i)
        if (codeAscii > 47 && codeAscii < 58) {
            string += String.fromCharCode(codeAscii);
        } else if (codeAscii > 64 && codeAscii < 91) {
            codeAscii += 10;
            if (codeAscii > 90) {
                codeAscii -= 26;
                string += String.fromCharCode(codeAscii);
            } else { string += String.fromCharCode(codeAscii); }

        } else if (codeAscii > 96 && codeAscii < 123) {
            codeAscii += 10;
            if (codeAscii > 122) {
                codeAscii -= 26;
                string += String.fromCharCode(codeAscii);
            } else {
                string += String.fromCharCode(codeAscii);
            }
        }
    }
    return string
}