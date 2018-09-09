class Kata {
  static dnaStrand(dng: string) {
    return dna.replace(/./g, (c)=>({A:'T', T:'A', G:'C', C:'G'})[c]);
  }
}
