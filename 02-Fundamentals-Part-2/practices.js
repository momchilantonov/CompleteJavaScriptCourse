//////////Functions//////////
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Bulgaria", 6, "Sofia"));
console.log(describeCountry("Italy", 15, "Rome"));
console.log(describeCountry("Russia", 50, "Moscow"));

//////////Function Declarations vs. Expressions//////////
function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    const percentagePopulation = (population / worldPopulation) * 100;

    return percentagePopulation
}

const bulgariaPopulationPrcnt1 = percentageOfWorld1(6);
const italyPopulationPrcnt1 = percentageOfWorld1(15);
const russiaPopulationPrcnt1 = percentageOfWorld1(50);

console.log(bulgariaPopulationPrcnt1);
console.log(italyPopulationPrcnt1);
console.log(russiaPopulationPrcnt1);

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    const percentagePopulation = (population / worldPopulation) * 100;

    return percentagePopulation
}

const bulgariaPopulationPrcnt2 = percentageOfWorld2(6);
const italyPopulationPrcnt2 = percentageOfWorld2(15);
const russiaPopulationPrcnt2 = percentageOfWorld2(50);

console.log(bulgariaPopulationPrcnt2);
console.log(italyPopulationPrcnt2);
console.log(russiaPopulationPrcnt2);

//////////Arrow Functions//////////
const percentageOfWorld3 = population => (population / 7900) * 100;

const bulgariaPopulationPrcnt3 = percentageOfWorld3(6);
const italyPopulationPrcnt3 = percentageOfWorld3(15);
const russiaPopulationPrcnt3 = percentageOfWorld3(50);

console.log(bulgariaPopulationPrcnt3);
console.log(italyPopulationPrcnt3);
console.log(russiaPopulationPrcnt3);

//////////Functions Calling Other Functions//////////
function describePopulation(country, population) {
    const populationPrcnt = percentageOfWorld1(population)
    return `${country} has ${population} million people, which is about ${populationPrcnt.toFixed(2)}% of the world.`
}

const bulgariaPopulationDescribe = describePopulation("Bulgaria", 6);
const italyPopulationDescribe = describePopulation("Italy", 15);
const russiaPopulationDescribe = describePopulation("China", 1441);

console.log(bulgariaPopulationDescribe);
console.log(italyPopulationDescribe);
console.log(russiaPopulationDescribe);

//////////Introduction to Arrays//////////
const population = [6, 15, 137, 1441];

console.log(population.length === 4);

const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3]),
]

console.log(percentages)

//////////Basic Array Operations (Methods)//////////
const neighbours = ["Greece", "Turkey", "Serbia"];

neighbours.push("Utopia");

console.log(neighbours);

neighbours.pop();

console.log(neighbours);

if (!neighbours.includes("Germani")) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Serbia")] = "Republic of Serbia";

console.log(neighbours);

//////////Introduction to Objects && Object Methods//////////
const myCountry = {
    country: "Bulgaria",
    capital: "Sofia",
    language: "bulgarian",
    population: 6,
    neighbours: ["North Macedonia", "Serbia", "Turkey", "Greece", "Romania"],
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },
    checkIsIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;

        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
console.log(myCountry.isIsland);

////////Dot vs. Bracket Notation//////////
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

//////////Iteration: The for Loop//////////
const votersNumber = 50;

for (let i = 1; i <= votersNumber; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//////////Looping Arrays, Breaking and Continuing//////////
const percentages2 = [];

for (let i = 0; i < population.length; i++) {
    percentages2.push(percentageOfWorld1(population[i]))
}

console.log(percentages, percentages2)

//////////Looping Backwards and Loops in Loops//////////
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

//////////The while Loop//////////
const percentages3 = [];
let itr = 0

while (itr <= listOfNeighbours.length) {
    percentages3.push(percentageOfWorld1(population[itr]));
    itr++;
}

console.log(percentages, percentages2, percentages3)