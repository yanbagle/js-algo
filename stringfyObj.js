function stringfyObj (obj) {

    // var obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3,
    // }
    //
    // var str = '{a: 1, b: 2, c: 3}'

    if (!obj) {
        return '';
    }

    var outputStr = '{';

    for (let key in obj) {
        // hasOwnProperty filters out the prototypical values of the obj, making sure that the keys are the obj's
        // and not of the obj's parent 
        if (obj.hasOwnProperty(key)) {
            outputStr += key + ': ' + obj[key] + ', ';
        }
    }
    outputStr += '}';

    return outputStr;

}

var yo = stringfyObj(
    {
        a: 1,
        b: 2,
        c: 3,
    });
display(yo);