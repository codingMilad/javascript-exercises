const fibonacci = function(number) {
    number = parseInt(number)
    feb = [1,1]
    if (number > 2) {
        for (let i = 0; i < number; i++) {
            if ( i > 1) {
                let hold = (feb[i - 2]) + (feb[i - 1])
                feb.push(hold)
            } else {
                continue
            }
        }
        
    } else if(number === 1 || number === 2) {
        return 1
    } else if(number < 0) {
        return "OOPS"
    } else {
        return 0
    }
    return feb[number-1]

};

// Do not edit below this line
module.exports = fibonacci;
