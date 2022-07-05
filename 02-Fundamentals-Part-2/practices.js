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