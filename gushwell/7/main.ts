//import { PrimeNumber } from './math/primeNumber';
//import { Stopwatch } from './utils/utils';
import { PrimeNumber } from './math/primeNumber';

class Solver {
  exec(maxnum :number): number {
    let i = 0;
    for ( let n of PrimeNumber.enumerate() ) {
       if ( ++i >= maxnum ) return n;
    }
    // not reach
    return -1;
  }
}

class Application {
  static run() : void {
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
