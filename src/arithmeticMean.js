module.exports.arithmeticMean = (arr = []) => {
    if (!arr || arr.length === 0) return 0;
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
};
