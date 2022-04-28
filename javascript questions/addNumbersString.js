// implement a function to calculate a formula string with 'plus' and 'minus'
// no need to worry about big number problem

var test = '1+31-24+100-92'
// '1+31-24+1+1+2+100-92'

// prevNumber '-'
// res 32
function calc(str){
    // your code here
    let res = 0;
    let prevNumber = '';
    
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if (c === '+') { // do calculation
        // prevNumber = +31
            res += Number(prevNumber);
            prevNumber = '+';
        } else if (c === '-') { // do calculation
            res += Number(prevNumber);
            prevNumber = '-';
        } else { // is number, prevNumber+=c
            prevNumber += c;         
        }
    }
    return res += Number(prevNumber);
}

console.log(calc(test)) // 16