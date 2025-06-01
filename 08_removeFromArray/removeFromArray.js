const removeFromArray = function(array, ...remove) {
    let newArray = []
    for(let i = 0; i <= array.length; i++) {
        if (!remove.includes(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
};
removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
