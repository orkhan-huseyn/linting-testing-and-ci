module.exports.every = (arr, func) => {
    let istrue = true;

    for (let elem of arr) {
        let result = func(elem);
        if (!result) {
            istrue = false;
        }
    }
    return istrue;
};
