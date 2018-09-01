import { Stopwatch } from './utils';
//import Stopwatch = Utils.Stopwatch;
class Solver {
    exec(maxnum: number): number {
        return maxnum;
    }
}
class Application {
    static run(): void {
        let sw = Stopwatch.startNew();
        try {
            let p = new Solver();
            let n = p.exec(100000);
            console.log(n);
        } finally {
            sw.stop();
            console.log(sw.toString());
        }
    }
}
Application.run();
