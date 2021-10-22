function highestRank(arr) {
    const numberList = {};
    for (const key of arr) {
        if (!Object.keys(numberList).includes(key.toString())) {
            numberList[key] = 1
        }
        else {
            numberList[key] += 1
        }
    }
    console.log(numberList)
    const maxNumber = Math.max(...Object.values(numberList));
    const maxNumberArray = [];
    for (const key in numberList) {
        if (numberList[key] == maxNumber) maxNumberArray.push(key)
    }
    return Math.max(...maxNumberArray)
}