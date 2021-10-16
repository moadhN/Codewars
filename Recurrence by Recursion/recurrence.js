function recurrence(base, formula, term) {
    return term == 1 ? base : recurrence(formula(base), formula, term = term - 1)
}

