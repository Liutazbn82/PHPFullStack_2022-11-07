function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = 10 + 10 - 4; //16
console.log(a)  //16
console.log(10 - 8) //2
console.log(typeof a);
console.log('********* Pirma užduotis *********')
let vardas = 'Vacys';
let pavarde = 'Maslionka';
console.log('Aktorius', vardas, pavarde);
// console.log(pavarde);
// let length = vardas.length;
console.log('Aktorio vardą sudaro - ' + vardas.length, 'pavardę - ' + pavarde.length, 'simboliai');
if (vardas.length < pavarde.length) {
    console.log('Trumpesnis stringas - ' + vardas)
} else {
    console.log('Trumpesnis stringas - ' + pavarde)
}
console.log('********* Antra užduotis *********')

let name = 'Nerijus';
let surname = 'Baležentis';
let yearOfBirth = 1982;
let thisYear = 2022;
let age = thisYear - yearOfBirth;
console.log('Aš esu', name, surname, '. ', 'Man yra', age, 'metų.')

console.log('********* Trečia užduotis *********')

let vladimir = 'Vladimir';
let zelensky = 'Zelensky';
console.log(vladimir.length, zelensky.length);
console.log(vladimir, zelensky);
var a1 = vladimir.length - 3;
var a2 = a1 + 1;
var a3 = a2 + 1;
var b1 = zelensky.length - 3;
var b2 = b1 + 1;
var b3 = b2 + 1;
console.log(vladimir[a1], vladimir[a2], vladimir[a3], zelensky[b1], zelensky[b2], zelensky[b3]);
console.log('********* Trečia užduotis kitas metodas *********')

let letter3 = vladimir.charAt(vladimir.length - 3);
let letter2 = vladimir.charAt(vladimir.length - 2);
let letter1 = vladimir.charAt(vladimir.length - 1);
let result = vladimir.concat(letter3, letter2, letter1);
console.log(result)
let zel3 = zelensky.charAt(zelensky.length - 3);
let zel2 = zelensky.charAt(zelensky.length - 2);
let zel1 = zelensky.charAt(zelensky.length - 1);
let result2 = zelensky.concat(zel3, zel2, zel1);
console.log(result2)


console.log('********* Ketvirta užduotis *********')

const a4 = 'Once upon a time in hollywood';
console.log(a4);
let changed = a4;

changed = changed.replaceAll("o", "*");
changed = changed.replaceAll("O", "*");
console.log(changed);

console.log('********* Penkta užduotis *********')

const number1 = rand(0,2);
const number2 = rand(0,2);
const number3 = rand(0,2);
const number4 = rand(0,2);

let nuliai = 0;
let vienas =0;
let du = 0;
                        //0
if(number1 === 0) {
    nuliai++;
}
if(number2 === 0) {
    nuliai++;
}
if(number3 === 0) {
    nuliai++;
}
if(number4 === 0) {
    nuliai++;
}
                        //1
if(number1 === 1)
    vienas++;
if(number2 === 1)
    vienas++;
if(number3 === 1)
    vienas++;
if(number4 === 1)
    vienas++;
                        //2
if(number1 === 2)
    du++;
if(number2 === 2) 
    du++;
if(number3 === 2)
    du++;
if(number4 === 2)
    du++;

console.log('Gauti skaičiai:', number1, number2, number3, number4);
console.log('Rezultatas: nuliai -', nuliai,'vienetai -', vienas, 'dvejetai -', du );



