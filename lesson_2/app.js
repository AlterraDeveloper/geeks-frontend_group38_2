// Data types, типы данных
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. object

let myBankInfo = {
    name: "Evgeniy",
    surname: "Kiselev",
    fatherName: "Dmitrievich",
    card: {
        number: "1342 1342 1342 1342",
        pin: "5555",
        balance: 10_000,
        type: "credit",
        dates: {
            issue: {
                month: 5,
                year: 20
            },
            exp: "05/25"
        }
    },
    email: "eu.ki@mail.kg",
    password: "123test123"
}

// concatenation - конкатенация
console.log("my FIO: " + myBankInfo.surname + " " +
    myBankInfo.name + " " + myBankInfo["fatherName"]);

let mBankReceiverName =
    myBankInfo.name + " " + myBankInfo.surname[0] + ".";

console.log("Mbank: " + mBankReceiverName);

// + - * / % **
// += -= *= /= %= **= short-hand

let amount = 5000;

console.log("My balance: " + myBankInfo.card.balance);

// myBankInfo.card.balance = myBankInfo.card.balance + amount;
myBankInfo.card.balance += amount;

console.log("My balance: " + myBankInfo.card.balance);

let purchaseAmount = 80_000;

// conditions - условия

// comparison - сравнения : > < >= <= == != === !==

if (myBankInfo.card.balance >= purchaseAmount
    || myBankInfo.card.type === "credit") {

    let cashback = 0;

    if (purchaseAmount <= 10_000) {
        cashback = purchaseAmount * 0.01;
    } else if (purchaseAmount <= 50_000) {
        cashback = purchaseAmount * 0.02;
    } else if (purchaseAmount <= 100_000) {
        cashback = purchaseAmount * 0.03;
    }

    myBankInfo.card.balance -= purchaseAmount;

    if (myBankInfo.card.type !== "credit") {
        myBankInfo.card.balance += cashback;
    }
} else {
    console.warn("Not enough money...",
        purchaseAmount - myBankInfo.card.balance);
}

console.log("My balance: " + myBankInfo.card.balance);

let weekday = "wed";

if (weekday === "wed" || weekday === "sat") {
    console.log("Yahooo, js lesson");
} else {
    console.log("boring day");
}

let inputEmail = "eu.ki@mail.kg";
let inputPassword = "123test123";

if (myBankInfo.email === inputEmail
    && myBankInfo.password === inputPassword) {
    console.log("Welcome to our bank");
} else {
    console.error("Access denied. Invalid email or password.");
}


for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        document.body.innerHTML += "<div class='even'>" + (i + 1) + "</div>"
    } else {
        document.body.innerHTML += "<div class='odd'>" + (i + 1) + "</div>"
    }
}

weekday = 'wed';

switch (weekday) {
    case "mon":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday")
        break;
    case "wed":
        console.log("Wednesday")
        break;
    case "sun":
        console.log("Sunday")
        break;
}


console.log("Hello Github");
console.log("Hello Github");
console.log("Hello Github");
console.log("Hello Github");
console.log("Hello Github");
console.log("Hello Github");
console.log("Hello Github");
console.log("Hello Github");


