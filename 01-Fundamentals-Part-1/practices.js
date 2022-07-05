//////////Values and Variables//////////
const country = "Bulgaria";
const continent = "Europe";
const population = 6

console.log(country);
console.log(continent);
console.log(population);

//////////Data Types//////////
let isItland = true;
console.log(typeof isItland);

//////////let, const and var//////////
const nativeLanguage = "Bulgarian";

//////////Basic Operators//////////
let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

let description = "Portugal is in Europe, and its 11 million people speak portuguese"

//////////Strings and Template Literals//////////
console.log(`${country} is in ${continent}, and its ${population} million people speak ${nativeLanguage}`)

//////////if / else Statements//////////
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

//////////Type Conversion and Coercion//////////
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // "617"
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 

//////////Equality Operators//////////
let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

////////Logical Operators//////////
if (nativeLanguage === "English" && population < 50 && isItland === true) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

//////////The switch Statement//////////
let language = prompt("Enter language ...")

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Greate language too :D");
}

//////////The Conditional (Ternary) Operator//////////
console.log(population > averagePopulation ? `${country}'s population is above average`: `${country}'s population is below average`)
