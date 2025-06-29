const palindromes = function (word) {
    word = word.toLowerCase();
    let j = word.length - 1;

    const isAlphanumeric = (char) => {
        return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
    };

    for (let i = 0; i < word.length; i++) {
        if (!isAlphanumeric(word[i])) {
            continue;
        }

        while (j >= 0 && !isAlphanumeric(word[j])) {
            j--;
        }

        if (i >= j) {
            return true;
        }

        if (word[i] !== word[j]) {
            return false;
        }

        j--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;