function allContinents(list) {
    const allContinentsArray = []
    for (let person of list) {
        allContinentsArray.push(person.continent)
    }
    if (allContinentsArray.includes('Africa') && allContinentsArray.includes('Americas') && allContinentsArray.includes('Asia') && allContinentsArray.includes('Europe') && allContinentsArray.includes('Oceania')) {
        return true
    }
    return false
}