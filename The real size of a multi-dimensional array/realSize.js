function realSize(arrays) {
    const stuck = [...arrays]
    let count = 0;
    while (stuck.length) {
        const lastItem = stuck.pop();
        if (Array.isArray(lastItem)) {
            stuck.push(...lastItem)
        } else {
            count++
        }
    }
    return count;
}

