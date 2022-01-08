const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number'|| typeof(num2) != 'number' || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let smaller;
    let larger;
    if (num1 > num2) {
        smaller = num2;
        larger = num1;
    } else {
        smaller = num1;
        larger = num2;
    }

    let sum = 0;
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
