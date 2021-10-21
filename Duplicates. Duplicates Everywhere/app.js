const removeDuplicateIds = (obj) => {
    let charList = {};
    let finalObj = {};
    let arrayOfKeys = Object.keys(obj)

    for (let i = arrayOfKeys.length - 1; i != -1; i--) {
        const newArr = []
        const key = arrayOfKeys[i]

        for (const j of obj[key]) {
            if (charList[j] == false) continue;

            else {
                newArr.push(j)
                charList[j] = false;
            }
        }
        finalObj[key] = newArr
    }
    return finalObj
};