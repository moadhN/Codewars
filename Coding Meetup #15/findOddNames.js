function findOddNames(list) {
    return list.filter(person => (person.firstName.split('').reduce((a, b) => a + b.charCodeAt(), 0)) % 2 === 1)
}