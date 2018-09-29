"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumTriangularNumbers(n) {
    if (Number(n) <= 0)
        return 0;
    let numList = [];
    for (let i = 1; i <= n; i++) {
        numList.push((i * (i + 1)) / 2);
    }
    return numList.reduce((sum, x) => sum + x, 0);
}
exports.sumTriangularNumbers = sumTriangularNumbers;
console.log(sumTriangularNumbers(4));
