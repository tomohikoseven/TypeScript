"use strict";
function* generator(i) {
    yield i;
    yield i + 10;
}
class Test {
    *generator(i) {
        yield i;
        yield i + 10;
    }
}
var gen = generator(10);
for (let g of gen) {
    console.log(g);
}
let tgen = Test.generator(10);
for (let g of tgen) {
    console.log(g);
}
//console.log(gen.next().value);
//console.log(gen.next().value);
