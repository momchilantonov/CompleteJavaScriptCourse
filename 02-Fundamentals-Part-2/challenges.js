//////////Coding Challenge #1//////////
// Task1
const calcAverage = scores => scores.reduce((a, b) => a + b, 0) / scores.length;

// Task2
const avgDolphins1 = calcAverage([44, 23, 71]);
const avgDolphins2 = calcAverage([85, 54, 41]);
const avgKoalas1 = calcAverage([65, 54, 49]);
const avgKoalas2 = calcAverage([23, 34, 27]);

console.log(avgDolphins1);
console.log(avgDolphins2);
console.log(avgKoalas1);
console.log(avgKoalas2);

// Task3
function checkWinner(avgScores) {
    const avgHome = avgScores[0];
    const avgGuest = avgScores[1];
    const homeName = "Dolphins";
    const guestName = "Koalas";


    if (avgHome >= avgGuest * 2) {
        return `${homeName} win (${avgHome} vs. ${avgGuest})`;
    } else if (avgGuest >= avgHome * 2) {
        return`${guestName} win (${avgGuest} vs. ${avgHome})`;
    } else {
        return "No winner";
    }
}

// Task4
console.log(checkWinner([avgDolphins1, avgKoalas1]));
console.log(checkWinner([avgDolphins2, avgKoalas2]));

//////////Coding Challenge #2//////////
// Task1
function calcTip(billVal) {
    const tipVal = billVal >= 50 && billVal <= 300 ? billVal * 0.15 : billVal * 0.2;

    return tipVal;
}

console.log(calcTip(100));

// Task2
const bills = [125, 555, 44];

// Task3
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

console.log(tips);

// Task4
const total = [];

for (let i = 0; i < bills.length; i++) {
    let cuurentBill = bills[i] + bills[i] * calcTip(bills[i])
    total.push(cuurentBill);
}

console.log(total);

//////////Coding Challenge #3//////////
// Task1
const markBMI = {
    fullname: "Mark Miller",
    weight: 78,
    hight: 1.69,
    calcBMI: function() {
        this.bmi = this.weight / this.hight ** 2;
        
        return this.bmi
    }
};

const johnBMI = {
    fullname: "John Smith",
    weight: 92,
    hight: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / this.hight ** 2;
        
        return this.bmi
    }
};

console.log(
    `${markBMI.calcBMI() < johnBMI.calcBMI() ? `Mark's BMI (${markBMI.bmi.toFixed(2)}) is higher than John's (${jhonBMI.bmi.toFixed(2)})!`: `John's BMI (${johnBMI.bmi.toFixed(2)}) is higher than Mark's (${markBMI.bmi.toFixed(2)})!`}`
)

//////////Coding Challenge #4//////////
// Task1
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Task2
const tips2 = [];
const totals2 = [];

// Task3
for (let i = 0; i < bills2.length; i++) {
    const tip = calcTip(bills2[i]);
    const total = bills2[i] + tip;

    tips2.push(tip);
    totals2.push(total);
}

console.log(`tips -> ${tips2}`);
console.log(`totals -> ${totals2}`);

// Task4
function calcAverage2(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;

    return average;
}

console.log(calcAverage2(totals2));