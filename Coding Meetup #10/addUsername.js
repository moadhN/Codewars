function addUsername(list) {
    for (const person of list) {
        person.username = `${person.firstName.toLowerCase()}${person.lastName[0].toLowerCase()}${2020 - person.age}`
    }
    return list
}
