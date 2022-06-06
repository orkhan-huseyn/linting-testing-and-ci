// first solution
let upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let lowerCase = upperCase.toLowerCase();
let numbers = '1234567890';

const generatePassword = passwordLength => {
    let chars = upperCase + lowerCase + numbers;
    let passwd = '';

    for (let i = 0; i < passwordLength; i++){
        passwd += chars[Math.floor(Math.random()*chars.length)];
    }
    return passwd;
}


// second solution
let charList = []
const generate = passwordLength => {
    let passwd = '';
    let n = 0;    
    charList.push(upperCase, lowerCase, numbers);

    for (let i = 0; i < passwordLength; i++) {
        passwd += charList[n][Math.floor(Math.random()*(charList[n].length))];
        n++;
        if (n === 3) n = 0;
    }
    return shuffle(passwd);
}

const shuffle = str => {
    let mixedStr = '';
    let strArr = split(str);
   
    for (i = str.length - 1; i > 0; i--){
        let j = Math.floor(Math.random()*(i + 1));
        let tmp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = tmp;
    }

    for (let i = 0; i < strArr.length; i++){
        mixedStr += strArr[i];
    }
    return mixedStr;
}

const split = str => {
    let arr = [];
    for (let i = 0; i < str.length; i++ ){
        arr.push(str[i]);
    }
    return arr;
}