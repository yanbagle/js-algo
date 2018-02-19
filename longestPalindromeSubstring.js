function longestPalindromeSubstring (str) {

    if (!str || str.length === 0) {
        return '';
    }

    if (str.length === 1) {
        return str;
    }

    let longestPalindrome = str.substring(0,1);

    for (let i = 1; i < str.length; i++) {

        // for odd palindrome
        let palindrome = helper(i, i, str);
        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome;
        }

        // for even palindrome
        palindrome = helper(i, i+1, str);
        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome;
        }
    }

    return longestPalindrome;

}

function helper (i, j, str) {
    while (i >= 0 && j < str.length ) {
        if (str.charAt(i) !== str.charAt(j)) {
            break;
        }
        i--;
        j++;
    }
    return str.substring(i+1, j);
}

console.log(longestPalindromeSubstring('dabcba'));