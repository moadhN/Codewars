function sumTheTreeValues(root) {
    return Object.values(root).reduce((prev, current) => (typeof current == 'number' || current == null) ? prev + current : prev + sumTheTreeValues(Object.values(current)), 0)
}
