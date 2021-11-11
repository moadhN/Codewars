decodeMorse = function (morseCode) {
    if (typeof (morseCode) === String) return morseCode.trim()
    else {
        return morseCode.split('   ').map(word => word.split(' ').map(c => MORSE_CODE[c]).join('')).join(' ').trim();
    }
}