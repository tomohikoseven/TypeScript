"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kata {
    static highAndLow(numbers) {
        // throw new NotImplementedException() ?
        // No, wait, this is TypeScript.
        let numList = numbers.split(" ").map(x => Number(x));
        return String(Math.max(...numList)) + " " + String(Math.min(...numList));
    }
}
exports.Kata = Kata;
console.log(Kata.highAndLow("1 2 3"));
