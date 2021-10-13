function alphabetPosition(text) {
    const result = []
    text = text.toUpperCase()
    text.split(' ')
        .map(item => item.split('')
            .map(letter => (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) ?
                result.push(letter.charCodeAt() - 64)
                : ''))
    return result.join(" ")
}