// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

function validParen(str) {

    if (!str) {
        return false;
    }

    var validInput = {
       '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    var stack = [];

    for (let char of str) {
        // if it's an open paren
        if (validInput[char]) {
            stack.push(char);
        } else if (stack.length !== 0 && validInput[stack.pop()] === char) { // closed paren
            return false;
        }
    }

    return stack.length === 0;
}