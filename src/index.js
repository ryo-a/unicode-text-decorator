const db = require('./chardb.json');

module.exports.decorate = (targetString, fontName, option = {}) => {
    let result = '';
    [...targetString].forEach(char => {
        result += asciiToDecoratedText(char, fontName, option);
    });
    return result;
}

function asciiToDecoratedText(char, fontName, option) {
    let charUpperCase = char.toUpperCase();

    if (db[char] == undefined && db[charUpperCase] == undefined) {
        return char;
    }

    if (db[char][fontName] == "" && option.fallback == true) {
        char = char.toUpperCase();
    }

    try {
        return String.fromCodePoint('0x' + db[char][fontName]);
    } catch (e) {
        return char;
    }
}
