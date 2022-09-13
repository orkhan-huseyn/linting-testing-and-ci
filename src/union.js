export const union = (firstArr = [], secondArr = []) => {
    let arrays = [...firstArr, ...secondArr];
    let secondaryArr = [];

    if (firstArr.length === 0 && secondArr.length === 0) {
        return [];
    }

    for (let i = 0; i < arrays.length; i++) {
        let currentElement = arrays[i];
        let restOfTheArray = arrays.slice(i + 1);

        if (restOfTheArray.indexOf(currentElement) === -1) {
            secondaryArr.push(currentElement);
        }
    }

    return secondaryArr;
};
