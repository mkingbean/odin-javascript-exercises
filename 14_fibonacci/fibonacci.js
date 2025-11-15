const fibonacci = function(n) {
    n = +n;
    if (n < 0) {
        return "OOPS";
    } else {
        const sequence = [0, 1];
        for (let i = 2; i <= n; i++) {
            nextTerm = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextTerm);
        }
        return sequence.at(n);
    }
};

// Do not edit below this line
module.exports = fibonacci;
