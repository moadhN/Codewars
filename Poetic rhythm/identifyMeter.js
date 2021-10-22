const identifyMeter = str => {
    regexShort = new RegExp('[\.x]', 'g')
    regexlong = new RegExp('[_]', 'g')
    str = str.replace(regexShort, '*')
    str = str.replace(regexlong, '/')
    regex = new RegExp('[^*/]', 'g')
    if (regex.test(str)) return 'What is this?'
    console.log(str)
    switch (str) {
        case '*/':
            return 'iamb';
        case '/*':
            return 'trochee';
        case '//':
            return 'spondee';
        case '**':
            return 'pyrrhic';
        default:
            return 'Not a dissyllable.'
    }

}