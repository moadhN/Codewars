function reverse(n, r = 0) {
    if ((n / 10) < 1) return r + n;
    r = n % 10 + r;
    n = Math.floor(n / 10)
    return reverse(n, r * 10)
}

console.log(reverse(1234));
console.log(reverse(10987));
console.log(reverse(1020));



