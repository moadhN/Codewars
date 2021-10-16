function factorial(n) {
    return n < 0 ? null : (n <= 1 ? 1 : n * factorial(n - 1))
}

