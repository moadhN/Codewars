function computerToPhone(numbers) {
    const phoneKeypad = {
        0: 0,
        1: 7,
        2: 8,
        3: 9,
        4: 4,
        5: 5,
        6: 6,
        7: 1,
        8: 2,
        9: 3
    }
    let finalResult = ''
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i]
        finalResult += phoneKeypad[currentNumber]
    }
    return finalResult
}

