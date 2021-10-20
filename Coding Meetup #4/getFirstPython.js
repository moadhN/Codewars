function getFirstPython(list) {
    for (let person of list) {
        if (person.language === 'Python') return `${person.firstName}, ${person.country}`
    }
    return 'There will be no Python developers'
}