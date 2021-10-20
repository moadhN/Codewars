function greetDevelopers(lists) {
    for (let list of lists) {
        list.greeting = `Hi ${list.firstName}, what do you like the most about ${list.language}?`
    }
    return lists
}