
function isPalindrome(str) {
    const reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}

console.log(isPalindrome("madam"));