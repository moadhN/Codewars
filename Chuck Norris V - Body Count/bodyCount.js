function bodyCount(code) {

    return (/(([A-Z][0-9]){5}.\-[A-Z]%[0-9].[0-9]{2}.)/g).test(code)
}