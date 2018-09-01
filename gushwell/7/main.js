"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { PrimeNumber } from './math/primeNumber';
//import { Stopwatch } from './utils/utils';
const primeNumber_1 = require("./math/primeNumber");
class Solver {
    exec(maxnum) {
        let i = 0;
        for (let n of primeNumber_1.PrimeNumber.enumerate()) {
            if (++i >= maxnum)
                return n;
        }
        // not reach
        return -1;
    }
}
class Application {
    static run() {
        //let sw = Stopwatch.startNew();
        //try {
        let p = new Solver();
        let n = p.exec(10001);
        console.log(n);
        //} finally {
        //  sw.stop();
        //  console.log(sw.toString());
        //}
    }
}
Application.run();
