function collatz(n, count = 1) {
    if (n == 1) return count;
    (n % 2 == 0) ? n = n / 2 : n = n * 3 + 1;
    return collatz(n, count + 1);
}