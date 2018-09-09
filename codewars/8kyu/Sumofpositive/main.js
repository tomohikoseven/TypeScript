"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function positiveSum(arr) {
    if (arr.length == 0)
        return 0;
    let fil = arr.filter(x => x > 0);
    return fil.reduce((pre, cur) => pre + cur);
}
exports.positiveSum = positiveSum;
console.log(positiveSum([0, -1, 1]));
console.log(positiveSum([]));
