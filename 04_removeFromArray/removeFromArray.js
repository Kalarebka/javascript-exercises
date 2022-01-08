const removeFromArray = function(arr, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        const index = arr.indexOf(item);
        if (index > -1) {
        arr.splice(index, 1);
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
