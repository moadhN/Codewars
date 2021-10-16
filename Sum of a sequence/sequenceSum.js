const sequenceSum = (begin, end, step) => {
    return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};

/* --------------------------------------------------------------------------------------------------------- */
const sequenceSum = (begin, end, step) => {
    if (end < begin) return 0
    const arr = []
    for (let i = begin; i <= end; i = i + step) {
        arr.push(i)
    }
    return arr.reduce((a, b) => a + b)
};
