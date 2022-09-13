module.exports.unique = (arr) => {
    if (arr === undefined || arr.length === 0) {
        return [];
    }

    let secondaryArr = [];
    for (let elem of arr) {
        if (secondaryArr.indexOf(elem) === -1) {
            secondaryArr.push(elem);
        }
    }
    return secondaryArr;
};
