function calc(expr) {
    const stuck = [];
    const operator = ["+", "-", "/", "*"]
    expr = expr.split(' ')
    for (let i of expr) {
        if (operator.includes(i)) {
            const firstNumber = Number(stuck[stuck.length - 1])
            const secondNumber = Number(stuck[stuck.length - 2])
            stuck.pop()
            stuck.pop()

            switch (i) {
                case "+": {
                    const result = sum(firstNumber, secondNumber)
                    stuck.push(result)
                }
                    break;
                case "/": {
                    const result = div(firstNumber, secondNumber)
                    stuck.push(result)
                }
                    break;
                case "-": {
                    const result = sub(firstNumber, secondNumber)
                    stuck.push(result)
                }
                    break;
                case "*": {
                    const result = multip(firstNumber, secondNumber)
                    stuck.push(result)
                }
                    break;

            }
        } else {
            stuck.push(i)
        }
    }
    return stuck[0] ? parseFloat(stuck[0]) : 0;
}

function sum(a, b) { return a + b }
function sub(a, b) { return b - a }
function div(a, b) { return b / a }
function multip(a, b) { return a * b }


