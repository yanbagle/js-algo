function hasUniqueCharacters(str) {

    if (!str) {
        return false;
    }

    var charsArr = [];

    for (var i = 0; i < str.length; i++) {
        if (charsArr[str.charAt(i)]) {
            return false;
        } else {
            charsArr[str.charAt(i)] = true;
        }
    }
    return true;
}

var hasUni = hasUniqueCharacters('wwww');

window.onload = function() {
    document.getElementById('console').innerHTML = hasUni;
};