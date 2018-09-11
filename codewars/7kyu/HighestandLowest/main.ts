export class Kata {
  static highAndLow(numbers: string) {
    // throw new NotImplementedException() ?
    // No, wait, this is TypeScript.
    let numList = numbers.split(" ").map( x => Number(x) );
		return String(Math.max( ...numList )) + " " + String(Math.min( ...numList ));
  }
}

console.log( Kata.highAndLow("1 2 3") );
