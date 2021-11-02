function sc(screws) {
    const n = screws.length;
    const regex = new RegExp(/(-)(?=\+)|(\+)(?=-)/, 'g')
    const swap = screws.match(regex).length
    return n + (n - 1) + 5 * swap
}