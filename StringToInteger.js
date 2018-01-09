function stringToInt (str) {
    if (!str) {
        return null;
    }

    const converted = +str;
    console.log(typeof converted);
}

stringToInt('123');