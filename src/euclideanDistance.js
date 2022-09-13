module.exports.euclideanDistance = (firstArr, secondArr) => {
    if (
        (firstArr === undefined && secondArr === undefined) ||
        (firstArr.length === 0 && secondArr.length === 0)
    ) {
        return 0;
    }

    let result =
        (secondArr[0] - firstArr[0]) ** 2 + (secondArr[1] - firstArr[1]) ** 2;
    return result ** (1 / 2);
};
