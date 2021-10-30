function specialNumber(n) {
    return n.toString().split('').find(e => e > 5 || e < 0) ? "NOT!!" : "Special!!"
}