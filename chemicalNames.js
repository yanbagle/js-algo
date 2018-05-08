function matchSymbols (chemicals, symbols) {
    if (!chemicals || !symbols) {
        return;
    }

    let match;
    let matchedIndex;
    let output = [];

    // const output = chemicals.map((chemical) => {
    //     match = '';
    //     matchedIndex = -1;
    //     for (let symbol of symbols) {
    //         const foundIndex = chemical.indexOf(symbol);
    //         if (foundIndex > -1) {
    //             if (symbol.length > match.length) {
    //                 match = symbol;
    //                 matchedIndex = foundIndex;
    //             }
    //         }
    //     }
    //     if (match.length) {
    //         return chemical.substring(0, matchedIndex) + '[' + chemical.substring(matchedIndex, matchedIndex + match.length)
    //             + ']' + chemical.substring(matchedIndex + match.length);
    //     }
    // });

    chemicals.forEach((chem) => {
        let match = '';
        let matchedIndex = -1;
        for (let symbol of symbols) {
            let foundIndex = chem.indexOf(symbol);
            if (foundIndex > -1) {
                if (symbol.length > match.length) {
                    match = symbol;
                    matchedIndex = foundIndex;
                }
            }
        }
        if (match) {
            output.push(chem.substring(0, matchedIndex) + '[' + match + ']' + chem.substring(matchedIndex + match.length));
        }
    });

    return output;
}

console.log(matchSymbols(["Amazon", "Microsoft", "Google"], [ "I", "Am", "cro", "Na", "le", "abc"]));
