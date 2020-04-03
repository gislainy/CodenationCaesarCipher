export default function (crypt, cipher) {
    try {
        return removeAccent(crypt)
            .split("")
            .map(letter => {
                if (checkIfLetter(letter)) return getLetterBasedOnCipher(letter, cipher);
                return letter;
            })
            .join("");

    } catch (error) {
        console.log(error)
    }
};

function getLetterBasedOnCipher(letter, cipher) {
    const alphabet = getAlphabet();
    const position = alphabet.indexOf(letter);
    const diff = (position - cipher)
    if (diff < 0) {
        const index = (alphabet.length) + diff;
        return alphabet.charAt(index)
    } else {
        return alphabet.charAt(diff)
    }
}

function checkIfLetter(letter) {
    return /\w/.test(letter)
}

function removeAccent(str) {
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç";
    var to = "aaaaaeeeeeiiiiooooouuuunc";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str;
}
function getAlphabet() {
    let alphabet = [];
    for (let index = 0; index < 26; index++) {
        alphabet.push(String.fromCharCode(65 + index));
    }
    return alphabet.join("").toLowerCase();
}