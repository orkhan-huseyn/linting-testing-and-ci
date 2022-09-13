module.exports.ceasarCipher = (str, num) => {
    let encodedStr = '';
    for (let i = 0; i < str.length; i++) {
        encodedStr += String.fromCharCode(str.charCodeAt(i) + num);
    }
    return encodedStr;
};
