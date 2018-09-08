class G964 {
  public static mxdiflg = (a1:string[], a2:string[]) => {
    if ( a1.length == 0 ) return -1;
    if ( a2.length == 0 ) return -1;
    let a1NS = a1.map( x => x.length );
    let a2NS = a2.map( x => x.length );
    return Math.max( Math.abs( Math.min.apply(null,a1NS) - Math.max.apply(null,a2NS) )
                    ,Math.abs( Math.max.apply(null,a1NS) - Math.min.apply(null,a2NS) ));
  }
}

let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log( G964.mxdiflg( s1, s2 ) );
