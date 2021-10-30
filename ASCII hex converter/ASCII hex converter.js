const Converter = {
    toAscii: function (hex) {
        const regex = new RegExp('\\w{2}', "g")
        return hex.match(regex).map(h => String.fromCharCode(parseInt(h, 16))).join("")
    },
    toHex: function (ascii) {
        return ascii.split('')
            .map(l => Number(l.charCodeAt(0).length >= 2 ? l.charCodeAt(0) : `0${l.charCodeAt(0)}`).toString(16))
            .join('')
    }
}