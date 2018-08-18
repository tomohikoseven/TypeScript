class Fib {
    constructor(maxValue) {
        this.maxValue = maxValue;
        this.fn1 = 0;
        this.fn2 = 1;
    }
    next() {
        var current = this.fn1;
        this.fn1 = this.fn2;
        this.fn2 = current + this.fn1;
        if (this.maxValue != null && current >= this.maxValue) {
            return {
                done: true,
                value: null
            };
        }
        return {
            done: false,
            value: current
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
let fib = new Fib();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
let fibMax50 = new Fib(50);
console.log(Array.from(fibMax50));
let fibMax21 = new Fib(21);
for (let num of fibMax21) {
    console.log(num);
}
