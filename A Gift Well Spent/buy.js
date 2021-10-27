function buy(x, arr) {
    let counti = 0, countl = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let sum = x - element
        for (let l = i + 1; l < arr.length; l++) {
            const element2 = arr[l];
            if (element2 == sum) return [i, l]

        }
    }
    return null
}
