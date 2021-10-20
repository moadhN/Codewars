function countLanguages(list) {
    let languageList = {};
    for (person of list) {
        const languageValue = person.language
        if (!Object.keys(languageList).includes(languageValue)) {
            languageList[languageValue] = 0
        }
        languageList[languageValue] += 1
    }
    return languageList
}