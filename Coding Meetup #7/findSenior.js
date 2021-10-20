function findSenior(list) {
    let oldest = -Infinity;
    for (let person of list) {
        if (oldest < person.age) {
            oldest = person.age
        }
    }
    return list.filter(person => person.age == oldest)
}