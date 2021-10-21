function askForMissingDetails(list) {
    const finalList = []
    //if(list.every(person=>!Object.values(person).includes(null)))

    for (const person of list) {
        const personKeys = Object.keys(person);
        for (const key of personKeys) {

            if (person[key] == null) {
                person['question'] = `Hi, could you please provide your ${key}.`
                finalList.push(person)
            }
        }

    }

    return finalList
}