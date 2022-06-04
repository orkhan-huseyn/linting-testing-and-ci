const filter = (arr, func) => {
    let secondaryArr = [];

    for (let elem of arr) {
        let result = func(elem);
        if (result) {
            secondaryArr.push(elem);
        }
    }
    return secondaryArr;
}