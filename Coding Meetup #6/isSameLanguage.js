function isSameLanguage(list) {
    const laguageVAlue = list[0].language
    return list.every(person => person.language == laguageVAlue)
}