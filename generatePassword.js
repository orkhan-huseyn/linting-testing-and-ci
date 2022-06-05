const generatePassword = passwordLength => {
    let upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let lowerCase = upperCase.toLowerCase();
    let numbers = '1234567890';
    let chars = upperCase + lowerCase + numbers;
    let passwd = '';

    for (let i = 0; i < passwordLength; i++){
        passwd += chars[Math.floor(Math.random()*chars.length)];
    }
    return passwd;
}