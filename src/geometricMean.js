export const geometricMean = (arr) => {
    if (arr === undefined || arr.length === 0) return 0;

    let mult = 1;
    for (let num of arr) {
        mult *= num;
    }
    return mult ** (1 / arr.length);
};
