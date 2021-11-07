function isToday(date) {
    const today = new Date().toLocaleDateString();
    return today == date.toLocaleDateString()
}