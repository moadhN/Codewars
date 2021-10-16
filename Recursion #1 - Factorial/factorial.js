const factorial = (n, fac = 1) => {
    return (n <= 1) ? fac : factorial((n - 1), fac * n)
};