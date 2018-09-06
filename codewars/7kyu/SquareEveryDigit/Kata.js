"use strict";
exports.__esModule = true;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        var strNumList = String(num).split("");
        var squareStrNum = strNumList.map(function (value) {
            return Math.pow(Number(value), 2);
        });
        return Number(squareStrNum.join(""));
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.squareDigits(91));
