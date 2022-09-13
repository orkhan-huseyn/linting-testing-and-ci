export const arithmeticMean = (arr = []) => {
    if (!arr) return 0;
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
};
