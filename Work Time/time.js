function workTime(b, a) {
    const minA = a.split(':').reduce((a, b) => Number(a) * 60 + Number(b))
    const minB = b.split(':').reduce((a, b) => Number(a) * 60 + Number(b))
    const sum = minA - minB
    return sum
}
let sum =
    workTime("8:25", "15:45") +
    workTime("12:30", "16:30") +
    workTime("12:30", "16:30") +
    workTime("8:20", "13:30") +
    workTime("8:20", "16:00") +
    workTime("12:00", "16:00") +
    workTime("8:00", "14:00") +
    workTime("8:00", "14:00") +
    workTime("12:50", "18:30") +
    workTime("8:00", "13:50") +
    workTime("13:00", "18:30") +
    workTime("12:14", "18:30") +
    workTime("12:45", "18:30") +
    workTime("12:45", "18:30") +
    workTime("8:00", "18:30") +
    workTime("13:00", "18:30") +
    workTime("13:00", "18:30") +
    workTime("13:00", "18:30") +
    workTime("9:30", "18:30") +
    workTime("00:00", "5:00")

function calc(sum) {
    const hours = (sum / 60).toFixed()
    const min = (sum % 60)
    return `${hours} hours, ${min} mins`
}

console.log(calc(sum))