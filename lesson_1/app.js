

// V8 - JavaScript Engine - движок

console.log("Hello from app.js");

// setInterval(() => {
//     const colors = ['red', "green", 'blue', "yellow", "purple"];
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[randomIndex];
// }, 10);


// Хранение информации
// Обработка информации
// Передача информации
// Защита информации

// переменные, variables
// var, let, const

let userName = "Evgeniy";
let userSurname = 'Kiselev';
let userFatherName = "Dmitrievich";
let phoneNumber = "+996999112233";

let cardBalance = 4500;
let cardBalance2 = 25000;
let cardBalance3 = 0;

let isIdentified = true;
let hasInternetBanking = false;
let hasAgreeToProcessPersonalData = true;

let userSalary; // undefined

console.log("My salary:", userSalary, typeof userSalary);

userSalary = 15_000 + 5_000;

console.log("My salary:", userSalary, typeof userSalary);

userSalary = "одиннадцать тысяч";

console.log("My salary:", userSalary, typeof userSalary);


let userBirthDay = null;

// key-value
let passport = {
    series: "ID",
    number: "123456",
    issueDate: "01-01-1985",
    expiryDate: null,
    issueAuthority: "MVD Bishkek",
    INN: "20101200412345",
    isLimited: false
};

// Data types, типы данных
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. object
// ---------
// 7. BigInt
// 8. Symbol

// Camel case

let transferAmount = 8_000;

if(transferAmount > cardBalance){
    console.log("unsufficient balance. Try with another card");
}else{
    console.log("Transfer successfully completed");
}



