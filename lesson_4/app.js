var var_myName;

console.log("Lesson 4");

// Функции

// function declaration (hoisting)
function setBlueBackground() {
    document.body.style.backgroundColor = 'blue';
}

// function expression
const setOrangeBackground = function () {
    document.body.style.backgroundColor = 'orange';
}

function setBackground(color) {
    document.body.style.backgroundColor = color;
}

function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function getMin(a, b) {
    return a > b ? b : a;
}

let cashOutAmount = 5_000;
let bankLimit = 40_000;

console.log("Cash out amount:" + getMin(cashOutAmount, bankLimit));


// console.log("My name is:" + var_myName);
// console.log("My name is:" + let_myName);
// console.log("My name is:" + const_myName);

var_myName = "Evgeniy";
let let_myName = "Evgeniy";
const const_myName = "Evgeniy";

// let_myName = "Tilek";
// const_myName = "Tilek";
// console.log("My name is:" + let_myName);

const skills = ["HTML", "CSS", "JAVASCRIPT"];

skills.push("TYPESCRIPT");

console.log("My skills:", skills.join(", "));

const me = {
    name: "Evgeniy",
    surname: "Kiselev"
}

// me.name = "Tilek";
// me = 0;
console.log(me)

// ECMAScript 5: var
// ECMAScript 6: let const
// ES6+
// ES5

let isDarkMode = true;

isDarkMode ? setBackground("black") : setBackground("white");


function getGlobusBonuses(amount) {

    if (amount < 800) return 0;

    let bonus = Math.floor(amount / 100); // 930 / 100 = 9.3

    if (amount >= 800 && amount <= 1999) {
        return bonus;
    } else if (amount >= 2000 && amount <= 4999) {
        return bonus * 2;
    } else if (amount >= 5000) {
        return bonus * 3;
    }
}

console.log("930 (1x) = " + getGlobusBonuses(930))
console.log("2250 (2x) = " + getGlobusBonuses(2250));
console.log("5920 (3x) = " + getGlobusBonuses(5920));

function toLowerCase(text) {
    let lowerText = "";
    for (const char of text) {
        let charCode = char.charCodeAt(0);
        if (char >= "A" && char <= "Z") {
            charCode += 32;
        }
        lowerText += String.fromCharCode(charCode);
    }
    return lowerText;
}

function getFrontentTeacherName(monthIndex){
    switch (Number(monthIndex)) {
        case 1:
            return "Felix";
        case 2:
            return "Evgeniy";
        case 3:
            return "Nurdin";
        case 4:
            return "Baktybek";
        case 5:
            return "Daniyar";
    }
}

function getBackendTeacherName(monthIndex) {
    switch (Number(monthIndex)) {
        case 1:
            return "Aleksey";
        case 2:
            return "Radomir";
        case 3:
            return "Azat";
    }
}

function getAndroidTeacherName(monthIndex){
    switch (Number(monthIndex)) {
        case 1:
            return "Aleksey";
        case 2:
            return "Ramis";
        case 3:
            return "Rahat";
    }
}

function getIosTeacherName(monthIndex){
    switch (Number(monthIndex)) {
        case 1:
            return "Nursultan";
        case 2:
            return "Aitemir";
        case 3:
            return "Aidana";
    }
}

function getTeacherName(monthIndex, course) {
    switch (toLowerCase(course)) {
        case "frontend":
            switch (Number(monthIndex)) {
                case 1:
                    return "Felix";
                case 2:
                    return "Evgeniy";
                case 3:
                    return "Nurdin";
                case 4:
                    return "Baktybek";
                case 5:
                    return "Daniyar";
            }
        case "backend":
            switch (Number(monthIndex)) {
                case 1:
                    return "Aleksey";
                case 2:
                    return "Radomir";
                case 3:
                    return "Azat";
            }
        case "android":
            switch (Number(monthIndex)) {
                case 1:
                    return "Aleksey";
                case 2:
                    return "Ramis";
                case 3:
                    return "Rahat";
            }
        case "ios":
            switch (Number(monthIndex)) {
                case 1:
                    return "Nursultan";
                case 2:
                    return "Aitemir";
                case 3:
                    return "Aidana";
            }
    }
}

function getTeacherNameBrilliant(monthIndex, course){
    switch (toLowerCase(course)){
        case "frontend":
            return getFrontentTeacherName(monthIndex);
        case "backend":
            return getBackendTeacherName(monthIndex);
        case "android":
            return getAndroidTeacherName(monthIndex);
        case "ios":
            return getIosTeacherName(monthIndex);
    }
}


console.log("Frontend 2 month:" + getTeacherName(2, "FRONTEND"))
console.log("iOS 2 month:" + getTeacherName(2, "iOS"))

console.log("* Frontend 2 month:" + getTeacherNameBrilliant(2, "FRONTEND"))
console.log("* iOS 2 month:" + getTeacherNameBrilliant(2, "iOS"));


