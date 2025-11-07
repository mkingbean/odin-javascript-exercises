const removeFromArray = function(arr, ...elements) {
    for (const element of elements) {
        arr = arr.filter(value => value !== element);
    }
    return arr;
};

// Could use .includes() to avoid looping through the elements array.

// Do not edit below this line
module.exports = removeFromArray;
