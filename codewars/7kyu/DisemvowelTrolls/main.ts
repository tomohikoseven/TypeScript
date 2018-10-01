export class Kata {
  static disemvowel(str: string) {
    return str.replace(/[aiueo]/gi, '');
  }
}

console.log( Kata.disemvowel("ThIs is a pEn.") );
