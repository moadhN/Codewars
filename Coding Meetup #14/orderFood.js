function orderFood(list) {
    const food = {}
    for (const person of list) {
        const meal = person.meal;
        if (!Object.keys(food).includes(person.meal)) {
            food[meal] = 1
        } else {
            food[meal] += 1
        }
    }
    return food
}