function timeCorrect(timestring) {
    if (timestring == '') {
        return ''
    }
    else if (timestring == null) {
        return null
    }
    else {
        const date = new Date;
        let cheack = /^\d{2}:\d{2}:\d{2}$/;
        if (!timestring.match(cheack)) {
            return null
        } else {
            date.setUTCHours(...timestring.split(':'));
            console.log('date =', date)
            console.log('this =', date.setUTCHours(...timestring.split(':')))
            return date.toLocaleTimeString('en', { hour12: false });
        }
    }

}