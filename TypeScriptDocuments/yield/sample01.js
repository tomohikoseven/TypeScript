function* generator(age) {
    console.log("Hi");
    yield;
    console.log("My name is ");
    yield;
    console.log("Tsuyoshi.");
    yield;
    console.log(`age ${age}`);
}
let g = generator(46);
console.log(g.next());
console.log(g.next());
console.log(g.next());
