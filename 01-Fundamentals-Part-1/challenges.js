//////////Coding Challenge #1//////////
// Test data 1
const weightMark1 = 78;
const weightJohn1 = 92;
const heightMark1 = 1.69;
const heightJohn1 = 1.95;

const bmiMark1 = weightMark1 / heightMark1 ** 2;
const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;

const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(markHigherBMI1);

// Test data 2
const weightMark2 = 95;
const weightJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark2 = weightMark2 / heightMark2 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(markHigherBMI2);