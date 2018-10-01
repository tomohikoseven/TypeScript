"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kata {
    static disemvowel(str) {
        return str.replace(/[aiueo]/gi, '');
    }
}
exports.Kata = Kata;
console.log(Kata.disemvowel("ThIs is a pEn."));
