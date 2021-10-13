function tribonacci(signature, n) {
    if (n < 3) {
        if (n == 0) return []
        else {
            return [signature[n - 1]]
        }
    }

    if (signature.length == n) return signature;

    const sum = signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3]
    signature.push(sum)
    return tribonacci(signature, n)
}


console.log(tribonacci([1, 1, 1], 10))