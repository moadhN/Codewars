function countDevelopers(lists) {
    let count = 0
    for (let list of lists) {
        if (list['continent'] === 'Europe' && list['language'] === 'JavaScript') {
            count++
        }
    }
    return count
}