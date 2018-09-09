"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countPositivesSumNegatives(input) {
    if (input.length == 0)
        return [];
    let cntPos = input.reduce((p, c) => c > 0 ? p + 1 : p, 0);
    let sumNeg = input.reduce((p, c) => c < 0 ? p + c : p, 0);
    return [cntPos, sumNeg];
}
exports.countPositivesSumNegatives = countPositivesSumNegatives;
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
