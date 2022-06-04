const sum = list => {
    if (list === undefined) return 0;
    
    let sumOfNums = 0;
    for (let listItem of list) {
        sumOfNums += listItem;
    } 
    return sumOfNums;
}