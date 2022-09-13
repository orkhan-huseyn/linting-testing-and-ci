module.exports.sum = (list) => {
    if (list === undefined) return 0;

    sumOfNums = 0;
    for (let listItem of list) {
        sumOfNums += listItem;
    }
    return sumOfNums;
};
