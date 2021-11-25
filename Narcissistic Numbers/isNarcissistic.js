function isNarcissistic(n) {
    const power = (n + '').length;
    const result = Number((n + '').split('').map(n => n ** power).reduce((a, b) => a + b, 0))
    return result == n
}