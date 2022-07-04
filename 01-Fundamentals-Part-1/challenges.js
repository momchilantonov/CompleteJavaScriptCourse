//////////Coding Challenge #1//////////
// Test1
const weightMark1 = 78;
const weightJohn1 = 92;
const heightMark1 = 1.69;
const heightJohn1 = 1.95;

const bmiMark1 = weightMark1 / heightMark1 ** 2;
const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;

const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(markHigherBMI1);

// Test2
const weightMark2 = 95;
const weightJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark2 = weightMark2 / heightMark2 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(markHigherBMI2);

//////////Coding Challenge #2//////////
if (markHigherBMI1) {
    console.log(`Mark's BMI (${bmiMark1}) is higher than John's (${bmiJohn1})!`)
} else {
    console.log(`John's BMI (${bmiJohn1}) is higher than Mark's (${bmiMark1})!`)
}

//////////Coding Challenge #3//////////
// Task1
function getAvgScore(scores) {
    let scoresSum = 0;

    for (let score of scores) {
        scoresSum += score;
    }

    const result = scoresSum / scores.length;

    return result.toFixed(2);
}

const avgScoreDolphins1 = getAvgScore([96, 108, 89]);
const avgScoreKoalas1 = getAvgScore([88, 91, 110]);
const avgScoreDolphins2 = getAvgScore([97, 112, 101]);
const avgScoreKoalas2 = getAvgScore([109, 95, 123]);
const avgScoreDolphins3 = getAvgScore([97, 112, 101]);
const avgScoreKoalas3 = getAvgScore([109, 95, 106]);

// Test1
console.log(avgScoreDolphins1);
console.log(avgScoreKoalas1);
// Test2
console.log(avgScoreDolphins2);
console.log(avgScoreKoalas2);
// Test3
console.log(avgScoreDolphins3);
console.log(avgScoreKoalas3);

// Task2 & Task3 & Task4
function getWinner(avgScoreTeam1, avgScoreTeam2) {
    const minimumScore = 100;
    const isDolphinsWin = avgScoreTeam1 > avgScoreTeam2 && avgScoreTeam1 >= minimumScore;
    const isKoalasWin = avgScoreTeam2 > avgScoreTeam1 && avgScoreTeam2 >= minimumScore;
    const isDraw = avgScoreTeam1 == avgScoreTeam2 && avgScoreTeam1 >= minimumScore;

    if (isDolphinsWin) {
        return "The winner is Dolphins with average score " + avgScoreTeam1;
    } else if (isKoalasWin) {
        return "The winner is Koalas with average score " + avgScoreTeam2;
    } else if (isDraw) {
        return "The match is draw with average score " + avgScoreTeam1;
    } else {
        return "Average score under 100 points"
    }
}
// Test1
console.log(getWinner(avgScoreDolphins1, avgScoreKoalas1));
// Test2
console.log(getWinner(avgScoreDolphins2, avgScoreKoalas2));
// Test3
console.log(getWinner(avgScoreDolphins3, avgScoreKoalas3));

//////////Coding Challenge #4//////////
// Task1
function getTipVal(billVal) {
    const tipPrcnt = billVal >= 50 && billVal <= 300 ? 0.15 : 0.2; 

    return tipPrcnt;
}   

// Test1
console.log(getTipVal(275));
// Test2
console.log(getTipVal(40));
// Test3
console.log(getTipVal(430));

// Task2
function getTotalVal(billVal) {
    const tipPrcnt = getTipVal(billVal);
    const tipVal = billVal * tipPrcnt;
    const totalVal = billVal + tipVal;
    
    return `The bill was ${billVal.toFixed(2)}, the tip was ${tipVal.toFixed(2)}, and the total value ${totalVal.toFixed(2)}`
}

// Test1
console.log(getTotalVal(275));
// Test2
console.log(getTotalVal(40));
// Test3
console.log(getTotalVal(430));