const reverseString = function(str) {
    let arrayFromString = str.split("");
    arrayFromString.reverse();
    let reversedString = arrayFromString.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
