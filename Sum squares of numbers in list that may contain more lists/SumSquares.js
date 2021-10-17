function SumSquares(l) {
    return l.reduce((a, b) => Array.isArray(b) ? a + SumSquares(b) : a + b * b, 0)
}