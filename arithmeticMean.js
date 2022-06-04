const arithmeticMean = arr => {
    if ((arr === undefined) || (arr.length === 0)) return 0;
    sum = 0;
    for (let i of arr) {
        sum += i;
    } 
    return sum/ arr.length;
}