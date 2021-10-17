function facRecursion(value) {
    if (value < 0) return 0;
    return (value >= 0 && value <= 1) ? 1 : value * facRecursion(value - 1);
}
