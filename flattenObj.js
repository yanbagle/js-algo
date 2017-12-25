// const obj = {
//     a: 123,
//     b: 123,
//     c: {
//         a: 123,
//         b: 123,
//         c: {
//             a: 123,
//             b: 123,
//         }
//     }
//         ...and so on
// }
//
// output = {a: 123, b: 123, a: 123, b: 123, a: 123, b: 123 ...}

function flattenObj (obj, flattenObject) {
    if (!obj || !flattenObject) {
        return null;
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'string') {
                flattenObject[key] = obj[key];
            } else if (typeof obj[key] === 'object') {
                /*
                For objects and arrays, JS passes by reference...kind of

                *Via Stackoverflow*
                
                Javascript is always pass by value, but when a variable refers to an object (including arrays),
                the "value" is a reference to the object.
                Changing the value of a variable never changes the underlying primitive or object,
                it just points the variable to a new primitive or object.
                However, changing a property of an object referenced by a variable does change the underlying object.
                */
                flattenObj(obj[key], flattenObject);
            }
        }
    }

    return flattenObject;
}


var yo = flattenObj(
    {
        a: '1',
        b: '2',
        innerObj: {
            c: '3',
            d: '4',
            innerObj: {
                e: '5',
                f: '6',
            }
        },
    }, {});
console.log(yo);