function isLanguageDiverse(list) {
    const personLanguages = {}
    for (const person of list) {
        const languageName = person.language;
        if (!Object.keys(personLanguages).includes(languageName)) personLanguages[languageName] = 1
        else {
            personLanguages[languageName] += 1
        }


    }
    const arrayOfValues = Object.values(personLanguages)
    console.log(arrayOfValues)
    let max = Math.max(...arrayOfValues)
    let min = Math.min(...arrayOfValues)

    return Math.min(...arrayOfValues) * 2 >= Math.max(...arrayOfValues)
}