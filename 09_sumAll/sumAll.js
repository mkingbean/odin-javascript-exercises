const sumAll = function(a, b) {
    let numPair = [a, b].sort((a, b) => a - b);

    if (
        numPair[0] < 0 ||
        numPair.some(item => item % 1 !== 0) ||
        numPair.some(item => typeof item !== "number")
    ) return "ERROR";

    let sum = 0;
    for (let i = numPair[0]; i <= numPair[1]; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
