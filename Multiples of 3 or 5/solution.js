function solution(number) {
    console.log(number)
    if (number <= 2) return 0;

    let multThree = 0, multFive = 0, arrThree = [], arrFive = [];

    while (multThree + 3 < number) {
        multThree += 3;
        if (multThree % 5 == 0) continue
        arrThree.push(multThree)
    }
    while (multFive + 5 < number) {
        multFive += 5;
        arrFive.push(multFive)
    }

    if (multThree == []) multThree = 0
    else (multThree = arrThree.reduce((a, b) => a + b))
    if (multFive == []) multFive = 0
    else (multFive = arrFive.reduce((a, b) => a + b))

    return multThree + multFive

}