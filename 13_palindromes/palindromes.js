const palindromes = function (phrase) {
    const validChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let arr = phrase
    .split("")
    .filter(char => validChars.includes(char))
    .map(char => char.toLowerCase());

    let str = arr.join("");
    let reversedStr = arr.reverse().join("");
    
    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
