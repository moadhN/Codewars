function isAgeDiverse(list) {
    const allAges = {
        teens: 0,
        twenties: 0,
        thirties: 0,
        forties: 0,
        fifties: 0,
        sixties: 0,
        seventies: 0,
        eighties: 0,
        nineties: 0,
        centenarian: 0,
    }
    for (let person of list) {
        if ((person.age >= 10 && person.age < 20)) allAges.teens += 1;
        if ((person.age >= 20 && person.age < 30)) allAges.twenties += 1;
        if ((person.age >= 30 && person.age < 40)) allAges.thirties += 1
        if ((person.age >= 40 && person.age < 50)) allAges.forties += 1
        if ((person.age >= 50 && person.age < 60)) allAges.fifties += 1
        if ((person.age >= 60 && person.age < 70)) allAges.sixties += 1
        if ((person.age >= 70 && person.age < 80)) allAges.seventies += 1
        if ((person.age >= 80 && person.age < 90)) allAges.eighties += 1
        if ((person.age >= 90 && person.age < 100)) allAges.nineties += 1
        if ((person.age >= 100)) allAges.centenarian += 1
    }
    for (let age in allAges) {

        if (allAges[age] === 0) return false

    }
    return true
}