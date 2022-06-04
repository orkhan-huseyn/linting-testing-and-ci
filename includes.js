const includes = (arr , element = 0) => {
    
    let isIncluded = false;

    if ((arr === undefined) || (arr.length === 0)){
        return false;
    }
    for (let elem of arr) {
        if (elem === element){
            isIncluded = true;
            break;
        }
    }

    return isIncluded;
}