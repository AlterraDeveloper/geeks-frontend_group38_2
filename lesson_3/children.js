let children =
    [
        {
            name: "Alya",
            year: 2018,
        },
        {
            name: "Kamila",
            year: 2015,
        },
        {
            name: "Vlad",
            year: 2020
        },
        {
            name: "Asyl",
            year: 1990
        }
    ]
let giftCount = 0;
let currentYear = new Date().getFullYear();
let childrenWithGifts = [];

for (let child of children) {
    let age = currentYear - child.year;
    // if(age >= 4 && age <= 10){
    //     giftCount++;
    //     childrenWithGifts.push(child.name)
    // }
    if (age < 4 || age > 10) continue;

    giftCount++;
    childrenWithGifts.push(child.name);
}

console.log(giftCount + " of " + children.length + " get gifts");
console.log("Children:", childrenWithGifts);
