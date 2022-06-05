const reduce = (arr, func) => {
    let result = 0;
    for (let i = 0; i < arr.length; i+=2){
        if (i === arr.length -1) break;
        let funcResult = func(arr[i], arr[i+1]);
        result += funcResult;
    }
    return result;

}