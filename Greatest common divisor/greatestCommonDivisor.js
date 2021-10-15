function mygcd(x, y, r = (x > y ? y : x)) {
    if (x < y) return mygcd(y, x, r);
    if (x % y == 0) return r;
    else {
        r = x % y;
        return mygcd(y, r, r)
    }
}
