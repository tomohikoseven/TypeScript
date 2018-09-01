export class PrimeNumber {
  public static *enumerate() {
    //public static * enumerate(): IterableIterator<number> {
    yield 2;
    let i = 3;
    while( true ) {
      if ( PrimeNumber.isPrime(i) ) yield i;
      i += 2;
    }
  };

  public static isPrime(n: number): boolean {
    let r = Math.sqrt(n);
    for( let i = 3; i <= r; i += 2 ) {
      if( n % i === 0 ) return false;
    }
    return true;
  }
}
