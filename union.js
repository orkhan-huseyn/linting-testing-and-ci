const union = (firstArr, secondArr) => {
    if (((firstArr === undefined) && (secondArr === undefined)) || ((firstArr.length === 0) && (secondArr.length === 0))) {
        return [];
    } 

    let secondaryArr = [];

    for (let elem of firstArr) secondaryArr.push(elem);
    for (let elem of secondArr) secondaryArr.push(elem);

    return secondaryArr;
}