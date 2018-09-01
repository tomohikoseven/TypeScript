"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrimeNumber {
    static *enumerate() {
        //public static * enumerate(): IterableIterator<number> {
        yield 2;
        let i = 3;
        while (true) {
            if (PrimeNumber.isPrime(i))
                yield i;
            i += 2;
        }
    }
    ;
    static isPrime(n) {
        let r = Math.sqrt(n);
        for (let i = 3; i <= r; i += 2) {
            if (n % i === 0)
                return false;
        }
        return true;
    }
}
exports.PrimeNumber = PrimeNumber;
