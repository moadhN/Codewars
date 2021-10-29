function findOdd(A) {
    if (A.length == 0) return -1
    let count = A.filter(n => n == A[0]).length;

    if (count % 2 == 1) {
        return A[0]
    }
    else {
        let element = A[0]

        for (let i = 0; i < A.length; i++) {
            if (element === A[i]) {
                A.splice(i, 1)
                i--
            }
        }

    }

    return findOdd(A)

}