module.exports.intersection = (firstArr = [], secondArr = []) => {
    if (firstArr.length === 0 && secondArr.length === 0) {
        return [];
    }

    let secondaryArr = [];

    for (let elem of firstArr) {
        if (secondArr.indexOf(elem) !== -1) {
            secondaryArr.push(elem);
        }
    }

    return secondaryArr;
};
