"use strict";
class G964 {
}
G964.mxdiflg = (a1, a2) => {
    if (a1.length == 0)
        return -1;
    if (a2.length == 0)
        return -1;
    let a1NS = a1.map(x => x.length).sort((a, b) => a > b ? 1 : -1);
    console.log(a1NS[0]);
    let a2NS = a2.map(x => x.length).sort((a, b) => a > b ? 1 : -1);
    console.log(a2NS[a2NS.length - 1]);
    return Math.max(Math.abs(a1NS[0] - a2NS[a2NS.length - 1]), Math.abs(a1NS[a1NS.length - 1] - a2NS[0]));
};
let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(G964.mxdiflg(s1, s2));
