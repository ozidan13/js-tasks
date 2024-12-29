// Module.js
const generatedNumbers = [];

export function addNumber(number) {
    generatedNumbers.push(number);
}

export function getAllNumbers() {
    return generatedNumbers;
}
