"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumTwoSmallestNumbers(numbers) {
    //Code here
    let sortNumbers = numbers.sort((a, b) => a - b);
    return sortNumbers[0] + sortNumbers[1];
}
exports.sumTwoSmallestNumbers = sumTwoSmallestNumbers;
;
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
