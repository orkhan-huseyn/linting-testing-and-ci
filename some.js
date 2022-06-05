const some = (arr, func) => {
    for (let elem of arr) {
        let result = func(elem);
        if (result) {
            return true;
        }
    }

    return false;
}