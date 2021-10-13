function order(words) {
    let list = {}
    words.split(" ").map(word => {
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!isNaN(letter)) {

                list[letter] = word
            }
        }
    })

    return Object.values(list).join(' ')

}
