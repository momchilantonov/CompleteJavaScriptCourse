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