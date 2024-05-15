let cardIsBlocked = false;

// if(cardIsBlocked === false)
if (!cardIsBlocked) {
    console.log("Operations allowed");
} else {
    console.error("Card has blocked...")
}

let purchaseAmount = 200;
let bonus = 0;

// let temp = 100;
// while (temp < purchaseAmount) {
//     // bonus += 1;
//     bonus++;
//     temp += 100;
// }

bonus = Math.floor(purchaseAmount / 100); // 930 / 100 = 9.3

if (purchaseAmount >= 800 && purchaseAmount <= 1999) {
    bonus *= 1;
} else if (purchaseAmount >= 2000 && purchaseAmount <= 4999) {
    bonus *= 2;
} else if (purchaseAmount >= 5000) {
    bonus *= 3;
} else {
    bonus = 0;
}

console.log("Globus bonuses: ", bonus);

let monthIndex = prompt("Enter your month");
let teacherName;

// === strict строгое
// == non-strict нестрогое

switch (Number(monthIndex)) {
    case 1: // monthIndex === 1
        teacherName = "Felix";
        break;
    case 2:
        teacherName = "Evgeniy";
        break;
    case 3:
        teacherName = "Nurdin";
        break;
    case 4:
        teacherName = "Baktybek";
        break;
    case 5:
        teacherName = "Daniyar";
        break;
}

console.log("(Switch..case) Your teacher is " + teacherName);

let carTitle = "BMW";
let country;

switch (carTitle) {
    case "BMW":
    case "Mersedes-Benz":
    case "Audi":
        country = "🇩🇪";
        break;
    case "Ford":
    case "Chevrolet":
    case "Dodge":
        country = "🇺🇸"
        break;
}

// DRY - Don't repeat yourself

// Array - массив

let frontendTeachers =
    ["Felix", "Evgeniy", "Nurdin", "Baktybek", "Daniyar"];
//      0          1         2          3           4
teacherName = frontendTeachers[monthIndex - 1];
console.log("(Array) Your teacher is " + teacherName);

console.log("Frontend duration is " + frontendTeachers.length + " months");

let newTeacher = "Vadim";

frontendTeachers.push(newTeacher);

let geeksFirstTeacher = "Alexey";

frontendTeachers.unshift(geeksFirstTeacher);

console.log("Frontend duration is " + frontendTeachers.length + " months");


// loops - циклы
// for..of
// for
// for..in
// while
// do..while

let bankStatement = {
    incomes: 0,
    expenses: 0
}

let operations =
    [35_000, -7_000, -5_000, -500, -800, 7_000, -4500, -500];

for (let operation of operations) {
    if (operation > 0) {
        bankStatement.incomes += operation;
    } else {
        bankStatement.expenses += Math.abs(operation);
    }
}

console.log("My total incomes is: " + bankStatement.incomes)
console.log("My total expenses is: " + bankStatement.expenses)

let children =
    [2002, 1998, 1991, 2010, 2018, 2015, 2019, 2019, 2022, 2020, 2014];
let giftCount = 0;
let currentYear = new Date().getFullYear();

for (let child of children) {
    let age = currentYear - child;
    if (age >= 4 && age <= 10) {
        giftCount++;
    }
}

console.log(giftCount + " of " + children.length + " get gifts")

let cashInTotal = 0;

let banknotes = [500, 1000, 2000, 5000];

do {
    let cashInSum = Number(prompt("Enter cash in"));

    if(!cashInSum) break;

    if (!banknotes.includes(cashInSum)) {
        console.warn("GIVE ME ANOTHER BANKNOTE. TRY AGAIN");
        continue;
    }

    if (cashInTotal + cashInSum > 25_000) {
        console.error("OVER 25 000. OVER LIMIT IN ONE TRANSACTION");
        break;
    }

    cashInTotal += cashInSum;
    console.log("SUCCESS. " , cashInTotal);

} while (true)

// while(true){}
// for(;;)
