export class Kata {
  static descendingOrder(n: number) {
    //...
    return parseInt(String(n).split("").map(Number).sort( (a,b) => b-a ).join(""));
  }
}

console.log( Kata.descendingOrder(0) );
console.log( Kata.descendingOrder(1) );
