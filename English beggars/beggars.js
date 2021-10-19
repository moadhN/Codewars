function beggars(values, n, result = []) {
    if (n === 0) return result

    let sum = 0;
    let arrayValues = [...values]

    for (let i = 0; i < values.length; i += n) {
        const currentValue = values[i];
        sum += currentValue

        delete arrayValues[i]
    }

    arrayValues = arrayValues.filter(item => item != null)

    result.push(sum);

    return beggars(arrayValues, (n - 1), result)

}



