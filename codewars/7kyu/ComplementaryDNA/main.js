"use strict";
class Kata {
    static dnaStrand(dna) {
        return dna.split("").map(function (x) {
            if (x == 'A')
                return 'T';
            else if (x == 'T')
                return 'A';
            else if (x == 'G')
                return 'C';
            else if (x == 'C')
                return 'G';
        }).join("");
    }
}
console.log(Kata.dnaStrand("ATTGC"));
