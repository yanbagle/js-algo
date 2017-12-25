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

function stringfyObj2(obj) {

    if (!obj) {
        return null;
    }

    let strOutput = '';

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'string') {
                strOutput += obj[key] + ', ';
            }
            else if (typeof obj[key] === 'object') {
                strOutput += stringfyObj2(obj[key]);
            }
        }
    }

    return strOutput;
}

var yo = stringfyObj2(
    {
        a: '1',
        b: '2',
        c: {
            a: '3',
            b: '4',
            c: {
                a: '5',
                b: '6',
            }
        },
    });
display(yo);