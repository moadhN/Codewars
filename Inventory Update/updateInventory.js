function updateInventory(arr1, arr2) {
    const list = {}

    for (let i of arr1) {
        const name = i[1];
        const num = i[0];
        list[name] = num
    }

    for (let i of arr2) {
        const name = i[1];
        const num = i[0];
        if (Object.keys(list).includes(name)) {
            list[name] += num;
        } else {
            list[name] = num;
        }
    }

    const sortedArray = Object.keys(list).sort()
    const result = [];

    for (let key of sortedArray) {
        const arr = []
        const num = list[key]
        const name = key
        arr.push(num, name)
        result.push(arr)
    }

    return result
}