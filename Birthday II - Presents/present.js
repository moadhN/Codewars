function present(x, y) {

    switch (x) {
        case 'badpresent':
            return 'Take this back!';

        case 'goodpresent':
            return x.split('').map(letter => String.fromCharCode(letter.charCodeAt() + y)).join('');
        case 'crap':

            return x.split('').sort().join('')
        case 'bang':
            return x.split('').map(letter => letter.charCodeAt() - y).reduce((a, b) => a + b, 0)

        case 'dog':
            return `pass out from excitement ${y} times`

    }
    return 'empty'
}