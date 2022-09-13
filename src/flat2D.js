export const flat2D = (arr) => {
    if (arr === undefined || arr.length === 0) {
        return [];
    }

    let secondaryArr = [];
    for (let innerArr of arr) {
        for (let elem of innerArr) {
            secondaryArr.push(elem);
        }
    }

    return secondaryArr;
};

// rekursiv funksiya ile alinmadi :(
