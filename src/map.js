export const map = (arr, func) => {
    let secondaryArr = [];
    for (let elem of arr) {
        let result = func(elem);
        secondaryArr.push(result);
    }
    return secondaryArr;
};
