function romanToNumber (str) {

    if (!str) {
        return null;
    }

    const table = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    };

    let output = 0;

    for (let i = 0; i < str.length; i++) {
        const value = table[str.charAt(i)];
        if (i + 1 < str.length) {
            const value2 = table[str.charAt(i+1)];
            if (value2 > value) {
                output += value2 - value;
                i++;
            } else {
                output += value;
            }
        } else {
            output += value;
        }
    }

    return output;
}

console.log(romanToNumber('MCMIV'));