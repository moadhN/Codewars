function alexMistakes(numberOfKata, timeLimit) {
    let timeRest;
    let pushUpTime = 5;
    let count = 0;
    timeRest = timeLimit - numberOfKata * 6;
    while (timeRest - pushUpTime >= 0) {
        timeRest -= pushUpTime;
        pushUpTime *= 2;
        count++
    }

    return count
}