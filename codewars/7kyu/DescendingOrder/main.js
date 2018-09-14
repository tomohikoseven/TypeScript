"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kata {
    static descendingOrder(n) {
        //...
        return parseInt(String(n).split("").map(Number).sort((a, b) => b - a).join(""));
    }
}
exports.Kata = Kata;
console.log(Kata.descendingOrder(0));
console.log(Kata.descendingOrder(1));
