const RomanNumerals = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'LC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
    toRoman: function (number) {
        console.log(number)
        let currentNumber = number;
        const thousands = Math.floor(currentNumber / 1000)
        currentNumber = number - (thousands * 1000)
        const hundreds = Math.floor(currentNumber / 100)
        currentNumber = currentNumber - (hundreds * 100)
        const tens = Math.floor(currentNumber / 10)
        currentNumber = currentNumber - (tens * 10)
        const single = currentNumber
        return `${this[thousands * 1000]}${this[hundreds * 100]}${this[tens * 10]}${this[single]}`
    }
}