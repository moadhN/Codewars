function generateLink(user) {
    return user.split(' ').length > 1 ? "http://www.codewars.com/users/" + user.replace(" ", "%20") : "http://www.codewars.com/users/" + user
}