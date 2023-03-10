export class PasswordService {

    // ASCII simbolių eilių priskyrimas
    static getRandomLowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    static getRandomUpperCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    static getRandomNumbers() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    static getRandomSymbols() {
        let symbolStr = '-=~!@#$%^&*_:"(){}<>?|[]/';
        return symbolStr[Math.floor(Math.random() * symbolStr.length)];
    }
    static getPasswordObj(state) {
        let passwordObj = {};
        for (let key of Object.keys(state)) {
            if(typeof state[key] === 'boolean' && state[key]) {
              
                 passwordObj[key] = state[key];
            }
        }
        // console.log('passwordObj', passwordObj);
        return passwordObj;
    }

    static generatePassword(passwordObj , passwordLength) {
        // console.log(passwordObj);
        let thePassword = '';
        for(let i=0; i < Number(passwordLength); i+= Object.keys(passwordObj).length) {
            if(passwordObj.lower)  thePassword += `${this.getRandomLowerCase()}`;
            if(passwordObj.upper)  thePassword += `${this.getRandomUpperCase()}`;
            if(passwordObj.symbol)  thePassword += `${this.getRandomSymbols()}`;
            if(passwordObj.number)  thePassword += `${this.getRandomNumbers()}`;
        }
        return thePassword.substring(0, Number(passwordLength));
    }
}


// export default PasswordService;